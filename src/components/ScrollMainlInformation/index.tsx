import { Divider, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { AnimatePresence, motion, MotionProps } from "framer-motion";
import { useMe } from "../../hooks/useMe";
import { useTheme } from "../../hooks/useTheme";
import { Timeline } from "../Timeline";

const defaultAnimation: MotionProps = {
	initial: { x: 1500, display: "none" },
	animate: { x: 0, display: "block" },
	transition: { type: "spring", bounce: 1, damping: 10, delay: 1 },
};

export function ScrollMainInformation() {
	const { name, role, about } = useMe();
	const [isUp480px] = useMediaQuery("(min-width: 480px)");
	const {
		boxShadow: { DefaultBoxShadow },
	} = useTheme();

	return (
		<AnimatePresence>
			<motion.div {...defaultAnimation}>
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
					gap={10}
					p={isUp480px ? 10 : 5}>
					<Flex direction="column">
						<Text as="b" fontSize="4xl">
							{name}
						</Text>
						<Text as="b" fontSize="2xl" color="Primary">
							{role}
						</Text>
						<Text as="i" fontSize="md" color="Tertiary" mt={3}>
							{`"${about}"`}
						</Text>
					</Flex>
					<Divider size="3" />
					<Flex direction="column">
						<Text as="b" fontSize="2xl">
							Linha do tempo
						</Text>
						<Timeline />
					</Flex>
				</Flex>
			</motion.div>
		</AnimatePresence>
	);
}
