import { useContext } from "react";
import { ScrollNavigationContext } from "../contexts/ScrollNavigationContext";

export function useScrollNavigationContext() {
	const context = useContext(ScrollNavigationContext);

	if (!context) {
		throw new Error(
			"useScrollNavigationContext must be used within a ScrollNavigationProvider"
		);
	}

	return context;
}
