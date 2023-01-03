import { Divider, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { useMe } from "../../hooks/useMe";
import { Timeline } from "../Timeline";

export function ScrollMainInformation() {
	const { name, role, about } = useMe();
	const [isUp480px] = useMediaQuery("(min-width: 480px)");

	return (
		<Flex
			w={isUp480px ? "fit-content" : "100%"}
			h="fit-content"
			direction={"column"}
			bg="Background2"
			flex={1}
			margin={10}
			borderRadius={isUp480px ? 10 : 0}
			position="relative"
			gap={10}
			p={10}>
			<Flex direction="column">
				<Text as="b" fontSize="4xl">
					{name}
				</Text>
				<Text as="b" fontSize="2xl" color="Green">
					{role}
				</Text>
				<Text as="i" fontSize="md" color="Yellow" mt={3}>
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
	);
}
