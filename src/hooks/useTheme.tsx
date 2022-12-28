import { useTheme as chakraUseTheme } from "@chakra-ui/react";
import { MyCustomTheme } from "../global/styles/theme";

export function useTheme() {
	const theme = chakraUseTheme<MyCustomTheme>();
	return theme;
}
