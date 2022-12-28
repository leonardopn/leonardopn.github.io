import { Link } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useMemo } from "react";
import { useMe } from "../../../hooks/useMe";
import { useTheme } from "../../../hooks/useTheme";
import Color from "color";

interface SocialButtonProps {
	social: "facebook" | "linkedin" | "github";
}

export function SocialButton({ social }: SocialButtonProps) {
	const { social: mySocialNetworks } = useMe();
	const theme = useTheme();

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

	return (
		<Link
			display={"flex"}
			justifyContent={"center"}
			alignItems={"center"}
			colorScheme="Background"
			href={data.link}
			target="_blank"
			rel="noopener"
			_hover={{ background: "Background" }}
			background={Color(theme.colors.Background).alpha(0.3).toString()}
			w={50}
			h={50}
			borderRadius={10}>
			<Icon icon={data.icon} width={30} height={30} />
		</Link>
	);
}
