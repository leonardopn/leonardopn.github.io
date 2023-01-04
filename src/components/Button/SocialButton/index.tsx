import { useMemo } from "react";
import { useMe } from "../../../hooks/useMe";
import { LinkButton } from "../LinkButton";

interface SocialButtonProps {
	social: "facebook" | "linkedin" | "github";
}

export function SocialButton({ social }: SocialButtonProps) {
	const { social: mySocialNetworks } = useMe();

	const data = useMemo(() => {
		switch (social) {
			case "facebook":
				return { icon: "ic:baseline-facebook", link: mySocialNetworks.facebook };
			case "linkedin":
				return { icon: "mdi:linkedin", link: mySocialNetworks.linkedin };
			case "github":
				return { icon: "mdi:github", link: mySocialNetworks.github };
			default:
				throw new Error("Social not found");
		}
	}, [social]);

	return <LinkButton isExternal icon={data.icon} href={data.link} target="_blank" />;
}
