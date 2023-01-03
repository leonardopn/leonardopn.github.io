import { extendTheme } from "@chakra-ui/react";

const primaryColors = {
	Primary: "rgba(149,128,255,1)",
	Secondary: "rgba(128,255,234,1)",
	Tertiary: "#50fa7b",
};

const colors = {
	Background: "#282a36",
	Background2: "#44475a",
	Foreground: "#f8f8f2",
	Cyan: "rgba(128,255,234,1)",
	Green: "#50fa7b",
	Orange: "#ffb86c",
	Pink: "#ff79c6",
	Purple: "rgba(149,128,255,1)",
	Red: "#ff5555",
	Yellow: "#f1fa8c",
	GradientDefault: `linear-gradient(70deg,${primaryColors.Primary} 0%, ${primaryColors.Secondary} 100%)`,
	...primaryColors,
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
