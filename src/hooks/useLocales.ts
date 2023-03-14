import { useTranslation } from "react-i18next";
import { allLangs, defaultLang } from "../configs/i18n";

export function useLocales() {
	const { i18n, t: translate } = useTranslation();

	const langStorage = localStorage.getItem("i18nextLng");

	const currentLang = allLangs.find(_lang => _lang.value === langStorage) || defaultLang;

	const handleChangeLanguage = (newlang: string) => {
		i18n.changeLanguage(newlang);
	};

	return {
		onChangeLang: handleChangeLanguage,
		translate,
		t: translate,
		currentLang,
		allLangs,
	};
}
