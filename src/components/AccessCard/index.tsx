import { Box, Flex, HStack, Image, Text, useMediaQuery, VStack } from "@chakra-ui/react";
import Tilt from "react-parallax-tilt";

import { useMe } from "../../hooks/useMe";
import { SocialButton } from "../Button/SocialButton";

const holeCardW = 120;
const holeCardH = 20;
const holeCardTop = 30;

const ribbonCardW = holeCardW - 30;
const ribbonCardH = 280;
const ribbonCardTop = -ribbonCardH + holeCardTop + holeCardH / 2;

const imageBackdropW = 380;
const imageBackdropH = 200;
const imageBoxSize = 180;
const imageMarginTop = 80;

const basicInfoMt = imageMarginTop + 10;

const clipPath = "polygon(0 100%, 0 0, 100% 0, 100% 100%, 50% 70%)";

export function AccessCard() {
	const { photoProfile, name, role, miniAbout } = useMe();
	const [isUp480] = useMediaQuery("(min-width: 480px)");

	return (
		<Tilt>
			<Flex
				w="100%"
				maxW={isUp480 ? imageBackdropW : "initial"}
				h="fit-content"
				direction="column"
				bg="Background2"
				borderRadius={isUp480 ? 10 : 0}
				position="relative"
				m={10}
				mt={isUp480 ? -ribbonCardTop : 0}>
				<Box
					bg="GradientDefault"
					h={`${imageBackdropH}px`}
					w={isUp480 ? `${imageBackdropW}px` : "full"}
					position="relative"
					borderRadius={isUp480 ? "10px 10px 0 0" : 0}
					clipPath={clipPath}
				/>

				{isUp480 && (
					<>
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
					</>
				)}

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
				<Flex
					padding={"30px 10px"}
					direction={"column"}
					mt={`${basicInfoMt}px`}
					textAlign="center"
					flex={1}
					gap="60px"
					justify="space-between">
					<VStack justify="center">
						<Text fontSize="xl" as="b">
							{name}
						</Text>
						<Text fontSize="md" color="Green">
							{role}
						</Text>
						<Text fontSize="sm" color="Yellow" as={"em"}>{`"${miniAbout}"`}</Text>
					</VStack>
					<HStack justify="center" gap={5}>
						<SocialButton social="github" />
						<SocialButton social="facebook" />
						<SocialButton social="linkedin" />
					</HStack>
				</Flex>
			</Flex>
		</Tilt>
	);
}
