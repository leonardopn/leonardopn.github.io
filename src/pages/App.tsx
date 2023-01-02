import { Divider, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { AccessCard } from "../components/AccessCard";
import { Particles } from "../components/Particles";

export function App() {
	const [isUp1000px] = useMediaQuery("(min-width: 1000px)");
	const [isUp480px] = useMediaQuery("(min-width: 480px)");

	return (
		<Flex
			minH="100vh"
			direction={isUp1000px ? "row" : "column"}
			align={isUp1000px ? "normal" : "center"}>
			<Particles />
			<AccessCard />
			{!isUp480px && <Divider />}
			<Flex
				zIndex={1}
				w={isUp480px ? "fit-content" : "100%"}
				h="fit-content"
				direction={"column"}
				bg="Background2"
				flex={1}
				margin={10}
				marginY={isUp1000px ? "auto" : 10}
				borderRadius={isUp480px ? 10 : 0}
				align="center"
				textAlign={"center"}
				p={10}>
				<Text as="b" fontSize="4xl">
					🔨🔧
				</Text>
				<Text as="b" fontSize="4xl">
					Site em desenvolvimento
				</Text>
				<Text fontSize="3xl">Em breve um novo portfólio 🚀</Text>
			</Flex>
		</Flex>
	);
}
