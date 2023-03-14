import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enLocales from "../locales/en.json";
import ptBRLocales from "../locales/pt-BR.json";

export const allLangs = [
	{
		label: "Português",
		value: "ptBR",
		flag: "br",
	},
	{
		label: "English",
		value: "en",
		flag: "us",
	},
];

export const defaultLang = allLangs[0];

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: { translations: enLocales },
			ptBR: { translations: ptBRLocales },
		},
		lng: localStorage.getItem("i18nextLng") || defaultLang.value,
		debug: false,
		ns: ["translations"],
		defaultNS: "translations",
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
