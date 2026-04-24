import { Toggle } from "@base-ui/react";
import { IconDeviceDesktop, IconMoon, IconSun } from "@tabler/icons-react";
import { HStack } from "@/kumi-ui/components/HStack/HStack.tsx";
import { IconButton } from "@/kumi-ui/components/IconButton/IconButton.tsx";
import { useKumiUI } from "@/kumi-ui/components/Provider.tsx";
import { kumi } from "@/kumi-ui/kumi.ts";
import type { Mode } from "@/kumi-ui/utils/kumi-ui.types.ts";

interface InternalMode {
	mode: Mode;
	icon: React.ReactNode;
}

export const ThemeSwitcher = () => {
	const { mode, setMode } = useKumiUI();
	const modes: InternalMode[] = [
		{
			mode: "system",
			icon: <IconDeviceDesktop />,
		},
		{
			mode: "light",
			icon: <IconSun />,
		},
		{
			mode: "dark",
			icon: <IconMoon />,
		},
	];

	return (
		<HStack
			// aria-label
			className={kumi({
				display: "flex",
				gap: "4px",
				backgroundColor: "surface-high",
				padding: "4px",
				// borderRadius: "21px",
				borderRadius: "666px",
			})}
		>
			{/* <Typo>{mode}</Typo> */}
			{modes.map((m) => {
				const isActive = m.mode === mode;
				return (
					<Toggle
						key={m.mode}
						aria-label={`${m} Theme`}
						value={m.mode}
						render={
							<IconButton
								variant={isActive ? "primary" : "ghost"}
								className={kumi({
									borderRadius: "666px !important",
									color: isActive ? "text-low" : "text-low",
									transition: "color 150ms, background-color 200ms",
									// "&:hover": {
									// 	color: mode === "dark" ? "text" : "text-alt",
									// 	backgroundColor: "unset",
									// },
									svg: {
										strokeWidth: "2.5px",
									},
								})}
							/>
						}
						onClick={() => setMode(m.mode)}
					>
						{m.icon}
					</Toggle>
				);
			})}
		</HStack>
	);
};
