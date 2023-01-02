import { Divider, Flex, useMediaQuery } from "@chakra-ui/react";
import { AccessCard } from "../components/AccessCard";
import { Particles } from "../components/Particles";
import { ScrollMainInformation } from "../components/ScrollMainlInformation";

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
			<ScrollMainInformation />
		</Flex>
	);
}
