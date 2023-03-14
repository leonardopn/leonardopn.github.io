import { extendTheme } from "@chakra-ui/react";
import Color from "color";

const primaryColors = {
	Primary: "rgba(149,128,255,1)",
	Secondary: "rgba(128,255,234,1)",
	Tertiary: "#50fa7b",
};

const defaultColors = {
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
};

const colorToScale = primaryColors.Primary;

const primaryColorScale = {
	0.4: Color(colorToScale).alpha(0.4).toString(),
	0.3: Color(colorToScale).alpha(0.3).toString(),
	0.2: Color(colorToScale).alpha(0.2).toString(),
	0.1: Color(colorToScale).alpha(0.1).toString(),
	0.05: Color(colorToScale).alpha(0.05).toString(),
};

const colorSchemes = {
	DefaultButton: {
		500: Color(defaultColors.Background).alpha(0.3).toString(),
		600: defaultColors.Background,
		700: Color(defaultColors.Background).alpha(0.5).toString(),
	},
};

const colors = {
	...defaultColors,
	...primaryColors,
	...colorSchemes,
};

const boxShadow = {
	DefaultBoxShadow: `${primaryColorScale["0.4"]} -5px 5px, ${primaryColorScale["0.3"]} -10px 10px, ${primaryColorScale["0.2"]} -15px 15px, ${primaryColorScale["0.1"]} -20px 20px, ${primaryColorScale["0.05"]} -25px 25px;`,
};

const fonts = {
	title: "'Bebas Neue', cursive",
	text: "'JetBrains Mono', monospace",
};

const global = {
	html: { scrollBehavior: "smooth" },
	body: {
		bg: "Background",
		color: "Foreground",
		fontFamily: "text",
	},
};

const myTheme = { boxShadow, colors, fonts, styles: { global } };

export const theme = extendTheme(myTheme);

export type MyCustomTheme = typeof myTheme;
