import { extendTheme } from "@chakra-ui/react";

const colors = {
	Background: "#282a36",
	Background2: "#44475a",
	Foreground: "#f8f8f2",
	Cyan: "#8be9fd",
	Green: "#50fa7b",
	Orange: "#ffb86c",
	Pink: "#ff79c6",
	Purple: "#bd93f9",
	Red: "#ff5555",
	Yellow: "#f1fa8c",
	GradientDefault: "linear-gradient(70deg, rgba(149,128,255,1) 0%, rgba(128,255,234,1) 100%);",
};

const fonts = {
	title: "'Bebas Neue', cursive",
	text: "'JetBrains Mono', monospace",
};

const global = {
	body: {
		bg: "Background",
		color: "Foreground",
		fontFamily: "text",
	},
};

const myTheme = { colors, fonts, styles: { global } };

export const theme = extendTheme(myTheme);

export type MyCustomTheme = typeof myTheme;
