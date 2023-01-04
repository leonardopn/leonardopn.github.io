import { createContext, ReactNode, useEffect } from "react";
import { Location, useLocation } from "react-router-dom";

export enum PossibleRoutes {
	"#home",
	"#timeline",
	"#tech",
}

interface ScrollNavigationContextProps {
	location: Location;
}

interface ScrollNavigationProviderProps {
	children: ReactNode;
}

const ScrollNavigationContext = createContext<ScrollNavigationContextProps | null>(null);

function ScrollNavigationProvider({ children }: ScrollNavigationProviderProps) {
	const location = useLocation();

	const { hash } = location;

	useEffect(() => {
		const element = document.getElementById(hash.replace("#", ""));

		if (element) {
			element.scrollIntoView(true);
		}
	}, [hash]);

	return (
		<ScrollNavigationContext.Provider value={{ location }}>
			{children}
		</ScrollNavigationContext.Provider>
	);
}

export { ScrollNavigationContext, ScrollNavigationProvider };
