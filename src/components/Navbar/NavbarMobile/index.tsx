import {
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	VStack,
} from "@chakra-ui/react";
import { PossibleRoutes } from "../../../contexts/ScrollNavigationContext";
import { useLocales } from "../../../hooks/useLocales";
import { LinkButton } from "../../Button/LinkButton";

interface NavbarMobileProps {
	isOpen: boolean;
	onClose: () => void;
}

export function NavbarMobile({ isOpen, onClose }: NavbarMobileProps) {
	const { t } = useLocales();
	function handleOnClose() {
		onClose();
	}

	return (
		<Drawer placement="left" onClose={onClose} isOpen={isOpen} returnFocusOnClose={false}>
			<DrawerOverlay />
			<DrawerContent bg="Background2">
				<DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
				<DrawerBody>
					<VStack bg="Background2" spacing={10} alignItems="stretch" mt={2}>
						<LinkButton
							icon="mdi:home"
							isExternal
							href={PossibleRoutes[0]}
							isMain
							onClick={handleOnClose}>
							{t("inicio")}
						</LinkButton>
						<VStack spacing={5} alignItems="stretch">
							<LinkButton
								onClick={handleOnClose}
								isExternal
								href={PossibleRoutes[1]}
								icon="mdi:chart-timeline-variant-shimmer">
								{t("linha.do.tempo")}
							</LinkButton>
							<LinkButton
								onClick={handleOnClose}
								isExternal
								href={PossibleRoutes[2]}
								icon="material-symbols:computer-rounded">
								{t("tecnologias.conhecidas")}
							</LinkButton>
						</VStack>
					</VStack>
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	);
}
