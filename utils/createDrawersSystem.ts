import { create } from "zustand";

type DrawerState<P> = false | true | { payload?: P };

type DrawerConfig = Record<string, Record<string, unknown>>;

type DrawersState<C extends DrawerConfig> = {
	[N in keyof C]: {
		[T in keyof C[N]]: DrawerState<C[N][T]>;
	};
};

export function createDrawersSystem<const C extends DrawerConfig>(config: C) {
	type DrawerName = keyof C;
	type DrawerType<N extends DrawerName> = keyof C[N];

	const initialDrawers = Object.fromEntries(
		Object.keys(config).map((name) => [
			name,
			Object.fromEntries(
				Object.keys(config[name as keyof C]).map((type) => [type, false]),
			),
		]),
	) as DrawersState<C>;

	const useDrawersStore = create<{
		drawers: DrawersState<C>;
		setState: <N extends DrawerName, T extends DrawerType<N>>(
			name: N,
			type: T,
			state: DrawerState<C[N][T]>,
		) => void;
	}>((set) => ({
		drawers: initialDrawers,
		setState: (name, type, state) =>
			set((s) => ({
				drawers: {
					...s.drawers,
					[name]: {
						...s.drawers[name],
						[type]: state,
					},
				},
			})),
	}));

	function useDrawer<N extends DrawerName, T extends DrawerType<N>>(name: N, type: T) {
		const drawer = useDrawersStore((s) => s.drawers[name][type]) as DrawerState<C[N][T]>;
		const setState = useDrawersStore((s) => s.setState);

		const isOpen = drawer !== false;
		const payload = drawer && typeof drawer === "object" ? drawer.payload : undefined;

		const set = (state: DrawerState<C[N][T]>) => {
			setState(name, type, state);
		};

		const open = (nextPayload?: C[N][T]) => {
			set(nextPayload === undefined ? true : { payload: nextPayload });
		};

		const close = () => {
			set(false);
		};

		return {
			drawer,
			isOpen,
			payload,
			set,
			open,
			close,
		};
	}

	return { useDrawersStore, useDrawer };
}
// type HabitPayloads = {
// 	view: { id: string };
// 	create: undefined;
// 	update: { id: string; initialName?: string };
// 	archive: { ids: string[]; reason?: string };
// };

// export const { useDrawer } = createDrawersSystem({
// 	habits: {
// 		view: null as unknown as HabitPayloads["view"],
// 		create: null as unknown as HabitPayloads["create"],
// 		update: null as unknown as HabitPayloads["update"],
// 		archive: null as unknown as HabitPayloads["archive"],
// 	},
// });
