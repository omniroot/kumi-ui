export type Mode = "system" | "light" | "dark";

export type ColorToken = {
	light: string;
	dark: string;
};

export type Tokens = {
	colors: Record<string, ColorToken>;
	space: Record<string, string>;
	radius: Record<string, string>;
};
