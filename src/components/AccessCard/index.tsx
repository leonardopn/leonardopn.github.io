import { Box, Flex } from "@chakra-ui/react";

const holeCardW = 120;
const holeCardH = 20;
const holeCardTop = 30;

const ribbonCardW = holeCardW - 30;
const ribbonCardH = 350;
const ribbonCardTop = -ribbonCardH + holeCardTop + holeCardH / 2;

export function AccessCard() {
	return (
		<Flex
			h={600}
			w={380}
			bg="Background2"
			borderRadius={10}
			position="relative"
			ml={20}
			mt={-ribbonCardTop}>
			<Box
				h={`${holeCardH}px`}
				w={`${holeCardW}px`}
				borderRadius={10}
				bg="Background"
				position="absolute"
				top={`${holeCardTop}px`}
				left="50%"
				marginLeft={`-${holeCardW / 2}px`}
			/>
			<Box
				h={ribbonCardH}
				w={`${ribbonCardW}px`}
				bg="GradientDefault"
				position="absolute"
				top={ribbonCardTop}
				left="50%"
				marginLeft={`-${ribbonCardW / 2}px`}
			/>
		</Flex>
	);
}
