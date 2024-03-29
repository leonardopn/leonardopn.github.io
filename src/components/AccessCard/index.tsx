import { Box, Flex, HStack, Image, Text, useMediaQuery, VStack } from "@chakra-ui/react";
import { AnimatePresence, motion, MotionProps } from "framer-motion";
import { useMemo } from "react";
import { useGlow } from "../../hooks/useGlow";
import { useMe } from "../../hooks/useMe";
import { useTheme } from "../../hooks/useTheme";
import { SocialButton } from "../Button/SocialButton";
import { Tilt } from "../Tilt";
import { isMobile } from "react-device-detect";

const holeCardW = 120;
const holeCardH = 20;
const holeCardTop = 30;

const ribbonCardW = holeCardW - 30;
const ribbonCardH = 550;
const ribbonCardTop = -ribbonCardH + holeCardTop + holeCardH / 2;

const imageBackdropW = 380;
const imageBackdropH = 200;
const imageBoxSize = 180;
const imageMarginTop = 80;

const cardMb = -210;

const basicInfoMt = imageMarginTop + 10;

const clipPath = "polygon(0 100%, 0 0, 100% 0, 100% 100%, 50% 70%)";

export function AccessCard() {
	const { glow, onHideGlow, onShowGlow } = useGlow();
	const { photoProfile, name, role, miniAbout } = useMe();
	const {
		boxShadow: { DefaultBoxShadow },
	} = useTheme();
	const [isUp480] = useMediaQuery("(min-width: 500px)");
	const [isUp1280px] = useMediaQuery("(min-width: 1280px)");

	const defaultAnimation = useMemo<MotionProps>(
		() =>
			!isMobile
				? {
						initial: { y: -1500 },
						animate: { y: isUp480 ? -250 : 0 },
						transition: { type: "spring", bounce: 1, damping: 10, delay: 0.3 },
					}
				: { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3 } },
		[isUp480, isMobile]
	);

	return (
		<AnimatePresence>
			<motion.div
				{...defaultAnimation}
				style={{
					height: "fit-content",
					position: isUp1280px ? "sticky" : "initial",
					top: 0,
				}}>
				<Tilt tiltAxis={"y"} useTilt={isUp480}>
					<Flex
						boxShadow={DefaultBoxShadow}
						_before={glow}
						onMouseEnter={onShowGlow}
						onMouseLeave={onHideGlow}
						w="100%"
						maxW={isUp480 ? imageBackdropW : "initial"}
						h="fit-content"
						direction="column"
						bg="Background2"
						borderRadius={isUp480 ? 10 : 0}
						position="relative"
						ml={isUp480 ? 10 : 0}
						mr={isUp480 ? 5 : 0}
						mb={isUp480 ? cardMb : 0}
						mt={isUp480 ? -ribbonCardTop - 80 : 0}
						_hover={{ mt: isUp480 ? -ribbonCardTop : 0 }}
						transition="margin-top 0.2s">
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
									_before={glow}
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
									_before={glow}
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
								<Text fontSize="md" color="Primary">
									{role}
								</Text>
								<Text
									fontSize="sm"
									color="Tertiary"
									as={"em"}>{`"${miniAbout}"`}</Text>
							</VStack>
							<HStack justify="center" gap={5}>
								<SocialButton social="github" />
								<SocialButton social="facebook" />
								<SocialButton social="linkedin" />
							</HStack>
						</Flex>
					</Flex>
				</Tilt>
			</motion.div>
		</AnimatePresence>
	);
}
