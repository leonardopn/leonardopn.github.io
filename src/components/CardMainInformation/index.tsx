import { Divider, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { AnimatePresence, motion, MotionProps } from "framer-motion";
import { useMemo } from "react";
import { isMobile } from "react-device-detect";
import { useLocales } from "../../hooks/useLocales";
import { useMe } from "../../hooks/useMe";
import { useTheme } from "../../hooks/useTheme";
import { ScrollPoint } from "../ScrollPoint";
import { Skills } from "../Skills";
import { Timeline } from "../Timeline";

export function CardMainInformation() {
	const { name, role, about } = useMe();
	const { t } = useLocales();
	const [isUp500px] = useMediaQuery("(min-width: 500px)");

	const {
		boxShadow: { DefaultBoxShadow },
	} = useTheme();

	const defaultAnimation = useMemo<MotionProps>(
		() =>
			!isMobile
				? {
						initial: { x: 1500, opacity: 0 },
						animate: { x: 0, opacity: 1 },
						transition: { type: "spring", bounce: 1, damping: 15, delay: 1 },
				  }
				: {},
		[isUp500px, isMobile]
	);

	return (
		<AnimatePresence>
			<motion.div {...defaultAnimation}>
				<ScrollPoint id="#home" />
				<Flex
					boxShadow={DefaultBoxShadow}
					w={isUp500px ? "fit-content" : "100%"}
					h="fit-content"
					direction={"column"}
					bg="Background2"
					flex={1}
					margin={isUp500px ? 10 : 0}
					borderRadius={isUp500px ? 10 : 0}
					position="relative"
					gap={5}
					p={isUp500px ? 10 : 5}>
					<Flex direction="column">
						{isUp500px && (
							<>
								<Text as="b" fontSize="4xl">
									{name}
								</Text>
								<Text as="b" fontSize="2xl" color="Primary">
									{role}
								</Text>
							</>
						)}
						<Text as="i" fontSize="md" color="Tertiary" mt={3}>
							{`"${about}"`}
						</Text>
					</Flex>
					<ScrollPoint id="#timeline" />
					<Divider size="3" />
					<Flex direction="column" gap={5}>
						<Text as="b" fontSize="2xl">
							{t("linha.do.tempo")}
						</Text>
						<Timeline />
					</Flex>
					<ScrollPoint id="#tech" />
					<Divider />
					<Flex direction="column" gap={5}>
						<Text as="b" fontSize="2xl">
							{t("tecnologias.conhecidas")}
						</Text>
						<Skills />
					</Flex>
				</Flex>
			</motion.div>
		</AnimatePresence>
	);
}
