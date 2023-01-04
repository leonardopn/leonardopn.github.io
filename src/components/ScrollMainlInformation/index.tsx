import { Divider, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { AnimatePresence, motion, MotionProps } from "framer-motion";
import { useMemo } from "react";
import { isMobile } from "react-device-detect";
import { useMe } from "../../hooks/useMe";
import { useTheme } from "../../hooks/useTheme";
import { ScrollPoint } from "../ScrollPoint";
import { Skills } from "../Skills";
import { Timeline } from "../Timeline";

export function ScrollMainInformation() {
	const { name, role, about } = useMe();
	const [isUp480px] = useMediaQuery("(min-width: 480px)");

	const {
		boxShadow: { DefaultBoxShadow },
	} = useTheme();

	const defaultAnimation = useMemo<MotionProps>(
		() =>
			!isMobile
				? {
						initial: { x: 1500, display: "none" },
						animate: { x: 0, display: "block" },
						transition: { type: "spring", bounce: 1, damping: 15, delay: 1 },
				  }
				: {},
		[isUp480px, isMobile]
	);

	return (
		<AnimatePresence>
			<motion.div {...defaultAnimation}>
				<ScrollPoint id="#home" />
				<Flex
					boxShadow={DefaultBoxShadow}
					w={isUp480px ? "fit-content" : "100%"}
					h="fit-content"
					direction={"column"}
					bg="Background2"
					flex={1}
					margin={isUp480px ? 10 : 0}
					borderRadius={isUp480px ? 10 : 0}
					position="relative"
					gap={5}
					p={isUp480px ? 10 : 5}>
					<Flex direction="column">
						{isUp480px && (
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
							Linha do tempo
						</Text>
						<Timeline />
					</Flex>
					<Divider />
					<ScrollPoint id="#tech" />
					<Flex direction="column" gap={5}>
						<Text as="b" fontSize="2xl">
							Tecnologias Conhecidas
						</Text>
						<Skills />
					</Flex>
				</Flex>
			</motion.div>
		</AnimatePresence>
	);
}
