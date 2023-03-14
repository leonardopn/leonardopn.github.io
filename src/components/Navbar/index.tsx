import { HStack, Stack, Tooltip, useBoolean, useMediaQuery, VStack } from "@chakra-ui/react";
import { PossibleRoutes } from "../../contexts/ScrollNavigationContext";
import { useLocales } from "../../hooks/useLocales";
import { LinkButton } from "../Button/LinkButton";
import { SelectorLanguageButton } from "../Button/SelectorLanguageButton";
import { NavbarMobile } from "./NavbarMobile";

export function Navbar() {
	const [isUp500px] = useMediaQuery("(min-width: 500px)");
	const { t } = useLocales();
	const [isOpen, { off, on }] = useBoolean(false);

	return (
		<Stack
			w={isUp500px ? 20 : "full"}
			bg="Background2"
			zIndex={1}
			paddingX={isUp500px ? 0 : 5}
			paddingY={isUp500px ? 5 : 0}
			align="center"
			position={"sticky"}
			top={0}
			spacing={10}
			h={isUp500px ? "100vh" : "16"}
			borderBottomWidth={!isUp500px ? 1 : 0}
			direction={isUp500px ? "column" : "row-reverse"}>
			{isUp500px && (
				<VStack w={20} bg="Background2" spacing={10} h="full">
					<Tooltip
						hasArrow
						label={t("inicio")}
						bg="Primary"
						color="white"
						placement="right">
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
							label={t("linha.do.tempo")}
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
							label={t("tecnologias.conhecidas")}
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
					<VStack
						spacing={5}
						direction={isUp500px ? "row" : "column"}
						marginTop="auto!important">
						<SelectorLanguageButton />
					</VStack>
				</VStack>
			)}
			{!isUp500px && (
				<HStack justifyContent="space-between" flex={1}>
					<SelectorLanguageButton />
					<LinkButton
						onClick={on}
						minH={30}
						minW={30}
						iconProps={{ width: 20, height: 20 }}
						icon="mdi:hamburger-menu"
					/>
					<NavbarMobile isOpen={isOpen} onClose={off} />
				</HStack>
			)}
		</Stack>
	);
}
