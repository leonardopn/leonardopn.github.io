import { PossibleRoutes } from "../../contexts/ScrollNavigationContext";

interface ScrollPointProps {
	id: keyof typeof PossibleRoutes;
}

export function ScrollPoint({ id }: ScrollPointProps) {
	return <span id={id.replace("#", "")} />;
}
