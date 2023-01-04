import { information } from "../mock/information";
import photoProfile from "../assets/me.png";

export function useMe() {
	return { ...information, photoProfile };
}
