import { HStack, Link as ChakraLink } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { LinkButton } from "../Button/LinkButton";

interface NavbarProps {}

export function Navbar() {
	const { hash } = useLocation();

	useEffect(() => {
		const element = document.getElementById(hash.replace("#", ""));

		if (element) {
			console.log("ROU");
			element.scrollIntoView(true);
		}
	}, [hash]);

	return (
		<HStack
			w="full"
			h={"16"}
			bg="Background2"
			position="sticky"
			top={0}
			zIndex={1}
			paddingX={5}
			spacing={10}>
			<LinkButton icon="mdi:home" routerProps={{ to: "/" }} />
			<HStack spacing={5}>
				<LinkButton
					isExternal
					href="/#tech"
					paddingX={5}
					icon="mdi:chart-timeline-variant-shimmer">
					Linha do Tempo
				</LinkButton>
				<LinkButton
					routerProps={{ to: "/" }}
					paddingX={5}
					icon="material-symbols:computer-rounded">
					Tecnologias Conhecidas
				</LinkButton>
			</HStack>
		</HStack>
	);
}
