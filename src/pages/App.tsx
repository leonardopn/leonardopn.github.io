import { Divider, Flex, useMediaQuery } from "@chakra-ui/react";
import { AccessCard } from "../components/AccessCard";
import { Particles } from "../components/Particles";
import { ScrollMainInformation } from "../components/ScrollMainlInformation";

export function App() {
	const [isUp1280px] = useMediaQuery("(min-width: 1280px)");
	const [isUp480px] = useMediaQuery("(min-width: 480px)");

	return (
		<Flex
			marginX={"auto"}
			maxW={"8xl"}
			minH="100vh"
			direction={isUp1280px ? "row" : "column"}
			align={isUp1280px ? "normal" : "center"}>
			<Particles />
			<AccessCard />
			{!isUp480px && <Divider />}
			<ScrollMainInformation />
		</Flex>
	);
}
