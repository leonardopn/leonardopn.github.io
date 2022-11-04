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
};

const fonts = {
	title: "'Bebas Neue', cursive",
	text: "'Poppins', sans-serif",
};

const global = {
	body: {
		bg: "Background",
		color: "Foreground",
		padding: "10",
		fontFamily: "text",
	},
};

export const theme = extendTheme({ colors, fonts, styles: { global } });
