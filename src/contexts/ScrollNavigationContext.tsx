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

	//NOTE: Ao montar o componente, se houver um hash na URL, o scroll é feito para o elemento com o id correspondente
	useEffect(() => {
		const element = document.getElementById(hash.replace("#", ""));

		if (element) {
			setTimeout(() => {
				element.scrollIntoView(true);
			}, 2000);
		}
	}, []);

	return (
		<ScrollNavigationContext.Provider value={{ location }}>
			{children}
		</ScrollNavigationContext.Provider>
	);
}

export { ScrollNavigationContext, ScrollNavigationProvider };
