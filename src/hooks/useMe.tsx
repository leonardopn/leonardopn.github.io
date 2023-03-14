import { skills } from "../mock/skills";
import photoProfile from "../assets/me.png";
import { useLocales } from "./useLocales";

export function useMe() {
	const { t } = useLocales();
	const information = {
		name: "Leonardo Petta do Nascimento",
		role: t("personalInformation.role"),
		miniAbout: t("personalInformation.miniAbout"),
		about: t("personalInformation.about"),
		social: {
			linkedin: "https://www.linkedin.com/in/leonardo-petta-do-nascimento-75674015b/",
			github: "https://github.com/leonardopn",
			facebook: "https://www.facebook.com/leonardo.petta.nascimento",
		},
		timeline: [
			{
				type: "EDUCATION",
				company: "Universidade Paulista (UNIP)",
				role: t("timeline.1.role"),
				period: "2018 - 2021",
				location: "Campinas - SP",
				description: t("timeline.1.description"),
				tags: [t("bacharelado"), t("faculdade")],
			},
			{
				type: "JOB",
				company: "Integrance",
				period: "Jun 2020 - Nov 2020",
				location: "Campinas - SP",
				role: t("timeline.2.role"),
				description: t("timeline.2.description"),
				tags: ["Javascript", "Node", "Google Script", "AWS"],
			},
			{
				type: "JOB",
				company: "Integrance",
				period: t("timeline.3.period"),
				location: "Campinas - SP",
				tags: ["Typescript", "Node", "React", "Google Script", "AWS"],
				role: t("timeline.3.role"),
				description: t("timeline.3.description"),
			},
			{
				type: "JOB",
				company: "TradePro",
				period: t("timeline.4.period"),
				location: "Pinhais - PR",
				tags: ["Typescript", "Node", "React/Native", "Firebase"],
				role: t("timeline.4.role"),
				description: t("timeline.4.description"),
			},
			{
				type: "EDUCATION",
				company: "Faculdade Descomplica",
				period: "2022 - 2023",
				location: "Online",
				tags: [t("pos.graduacao"), t("faculdade")],
				role: t("timeline.5.role"),
				description: t("timeline.5.description"),
			},
			{
				type: "EDUCATION",
				company: "Faculdade Descomplica",
				period: "2022 - 2023",
				location: "Online",
				tags: [t("pos.graduacao"), t("faculdade")],
				role: t("timeline.6.role"),
				description: t("timeline.6.description"),
			},
		],
	};

	return { ...information, skills, photoProfile };
}
