import informations from "../mock/informations.json";
import photoProfile from "../assets/me.png";

export function useMe() {
	return { ...informations, photoProfile };
}
