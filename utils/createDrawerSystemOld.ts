// type DrawersName = "habits";
// type DrawersType = "view" | "create" | "update" | "archive";

// type DrawerState = true | false | { payload?: unknown };
// type DrawerData = Record<DrawersType, DrawerState>;

// type DrawersStore = {
// 	drawers: Record<DrawersName, DrawerData>;
// 	setState: (name: DrawersName, type: DrawersType, state: DrawerState) => void;
// };

// const useDrawersStore = create<DrawersStore>((set) => ({
// 	drawers: {
// 		habits: {
// 			view: false,
// 			create: false,
// 			update: false,
// 			archive: false,
// 		},
// 	},
// 	setState(name, type, state) {
// 		set((store) => ({
// 			drawers: {
// 				...store.drawers,
// 				[name]: {
// 					...store.drawers[name],
// 					[type]: state,
// 				},
// 			},
// 		}));
// 	},
// }));

// export const useDrawer = (name: DrawersName, type: DrawersType) => {
// 	const { drawers, setState } = useDrawersStore();
// 	const drawer = drawers[name][type];
// 	const isOpen = Boolean(drawer);

// 	const set = (state: DrawerState) => {
// 		setState(name, type, state);
// 	};

// 	const open = (state?: DrawerState) => {
// 		set(state ?? true);
// 	};
// 	const close = () => {
// 		set(false);
// 	};

// 	console.log({ drawers });
// 	// @ts-expect-error 123
// 	return { isOpen, drawer, payload: drawer?.payload || undefined, set, open, close };
// };
