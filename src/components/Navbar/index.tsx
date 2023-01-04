import { Stack, Tooltip, useBoolean, useMediaQuery, VStack } from "@chakra-ui/react";
import { PossibleRoutes } from "../../contexts/ScrollNavigationContext";
import { LinkButton } from "../Button/LinkButton";
import { NavbarMobile } from "./NavbarMobile";

export function Navbar() {
	const [isUp500px] = useMediaQuery("(min-width: 500px)");
	const [isOpen, { off, on }] = useBoolean(false);

	return (
		<Stack
			w={isUp500px ? 20 : "full"}
			bg="Background2"
			zIndex={1}
			paddingX={isUp500px ? 0 : 5}
			paddingY={isUp500px ? 5 : 0}
			align="center"
			position={!isUp500px ? "sticky" : "initial"}
			top={0}
			spacing={10}
			h={isUp500px ? "auto" : "16"}
			borderBottomWidth={!isUp500px ? 1 : 0}
			direction={isUp500px ? "column" : "row-reverse"}>
			{isUp500px && (
				<VStack w={20} bg="Background2" position="sticky" top={10} spacing={10}>
					<Tooltip hasArrow label="Início" bg="Primary" color="white" placement="right">
						<span>
							<LinkButton
								icon="mdi:home"
								isExternal
								href={PossibleRoutes[0]}
								isMain
							/>
						</span>
					</Tooltip>
					<VStack spacing={5} direction={isUp500px ? "row" : "column"}>
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
			)}
			{!isUp500px && (
				<>
					<LinkButton
						onClick={on}
						minH={30}
						minW={30}
						iconProps={{ width: 20, height: 20 }}
						icon="mdi:hamburger-menu"
					/>
					<NavbarMobile isOpen={isOpen} onClose={off} />
				</>
			)}
		</Stack>
	);
}
