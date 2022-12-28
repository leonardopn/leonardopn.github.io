import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { useMe } from "../../hooks/useMe";

const holeCardW = 120;
const holeCardH = 20;
const holeCardTop = 30;

const ribbonCardW = holeCardW - 30;
const ribbonCardH = 280;
const ribbonCardTop = -ribbonCardH + holeCardTop + holeCardH / 2;

const imageBoxSize = 180;
const imageMarginTop = 80;

const clipPath = "polygon(0 100%, 0 0, 100% 0, 100% 100%, 50% 70%)";

export function AccessCard() {
	const { photoProfile, name, role } = useMe();

	return (
		<Flex
			h={600}
			w={380}
			direction="column"
			bg="Background2"
			borderRadius={10}
			position="relative"
			ml={20}
			mt={-ribbonCardTop}>
			<Box
				bg="GradientDefault"
				h={200}
				w={380}
				position="relative"
				borderRadius="10px 10px 0 0"
				clipPath={clipPath}
			/>

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

			<Image
				src={photoProfile}
				boxSize={imageBoxSize}
				objectFit="scale-down"
				bg="GradientDefault"
				borderStyle="solid"
				borderWidth="5px"
				borderColor="Background2"
				borderRadius="full"
				position="absolute"
				top={`${imageMarginTop}px`}
				left="50%"
				marginLeft={`-${imageBoxSize / 2}px`}
			/>
			<Box mt={`${imageMarginTop + 10}px`} textAlign="center">
				<Text fontSize="xl">{name}</Text>
				<Text fontSize="md">{role}</Text>
			</Box>
		</Flex>
	);
}
