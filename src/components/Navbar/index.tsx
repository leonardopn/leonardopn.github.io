import { Tooltip, VStack } from "@chakra-ui/react";
import { PossibleRoutes } from "../../contexts/ScrollNavigationContext";
import { LinkButton } from "../Button/LinkButton";

export function Navbar() {
	return (
		<VStack w={20} bg="Background2" zIndex={1} paddingY={5} spacing={10}>
			<VStack w={20} bg="Background2" position="sticky" top={10} spacing={10}>
				<Tooltip hasArrow label="Início" bg="Primary" color="white" placement="right">
					<span>
						<LinkButton icon="mdi:home" isExternal href={PossibleRoutes[0]} isMain />
					</span>
				</Tooltip>
				<VStack spacing={5}>
					<Tooltip
						hasArrow
						label="Linha do Tempo"
						bg="Primary"
						color="white"
						placement="right">
						<span>
							<LinkButton
								isExternal
								href={PossibleRoutes[1]}
								icon="mdi:chart-timeline-variant-shimmer"
							/>
						</span>
					</Tooltip>
					<Tooltip
						hasArrow
						label="Tecnologias Conhecidas"
						bg="Primary"
						color="white"
						placement="right">
						<span>
							<LinkButton
								isExternal
								href={PossibleRoutes[2]}
								icon="material-symbols:computer-rounded"
							/>
						</span>
					</Tooltip>
				</VStack>
			</VStack>
		</VStack>
	);
}
