import { createSystem, defineConfig } from "@chakra-ui/react";
import { defaultConfig } from "@chakra-ui/react/preset";

const config = defineConfig({
	theme: {
		tokens: {
			colors: {},
		},
		semanticTokens: {
			colors: {
				surface: { value: "var(--kumi-colors-surface)" },
				"surface-high": { value: "var(--kumi-colors-surface-high)" },
				"surface-low": { value: "var(--kumi-colors-surface-low)" },
				"text-low": { value: { _light: "#5a5646", _dark: "#e3dbc6" } },
				text: { value: { _light: "#101818", _dark: "#efeded" } },
				"text-high": { value: { _light: "#081616", _dark: "" } },
				primary: { value: { _light: "#413725", _dark: "#bbab92" } },
				"primary-hover": { value: "#5a4e35" },
				"on-primary": { value: { _light: "#efeded", _dark: "#171510" } },
				"secondary-ghost-hover": {
					value: {
						_light: "#7872584a",
						_dark: "#7872584a",
					},
				},
			},
		},
	},
});

const kumi_theme = createSystem(defaultConfig, config);
export default kumi_theme;
