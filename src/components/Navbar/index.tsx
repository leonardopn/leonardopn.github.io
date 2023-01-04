import { HStack } from "@chakra-ui/react";
import { PossibleRoutes } from "../../contexts/ScrollNavigationContext";
import { LinkButton } from "../Button/LinkButton";

export function Navbar() {
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
			<LinkButton icon="mdi:home" routerProps={{ to: PossibleRoutes[0] }} />
			<HStack spacing={5}>
				<LinkButton
					routerProps={{ to: PossibleRoutes[1] }}
					paddingX={5}
					icon="mdi:chart-timeline-variant-shimmer">
					Linha do Tempo
				</LinkButton>
				<LinkButton
					routerProps={{ to: PossibleRoutes[2] }}
					paddingX={5}
					icon="material-symbols:computer-rounded">
					Tecnologias Conhecidas
				</LinkButton>
			</HStack>
		</HStack>
	);
}
