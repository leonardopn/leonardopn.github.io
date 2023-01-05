import { Image, Text, VStack } from "@chakra-ui/react";
import { motion, MotionProps } from "framer-motion";
import { random } from "lodash";
import { useMemo } from "react";
import { useBoxShadow } from "../../../hooks/useBoxShadow";

interface SkillProps {
	name: string;
	image: string;
	mainColor: string;
	secondaryColor: string;
	showName?: boolean;
	className?: string;
}

export function Skill({
	image,
	name,
	mainColor,
	secondaryColor,
	className,
	showName = true,
}: SkillProps) {
	const boxShadow = useBoxShadow(mainColor);

	const sizes = useMemo(() => {
		function getVariant() {
			const choice = random(0, 3);
			switch (choice) {
				case 0:
					return 3;
				case 1:
					return 4;
				case 2:
					return 5;
				default:
					return 6;
			}
		}
		const span = `span ${getVariant()}`;
		return { span };
	}, []);

	const defaultAnimation = useMemo<MotionProps>(
		() => ({
			initial: { opacity: 0, transform: "scale(1.5)" },
			whileInView: { opacity: 1, transform: "scale(1)" },
			transition: {
				type: "spring",
				bounce: 1,
				damping: 8,
				delay: 0.3,
			},
		}),
		[]
	);

	return (
		<motion.div style={{ gridRowEnd: sizes.span }} {...defaultAnimation}>
			<VStack
				w={"full"}
				h={"full"}
				className={className}
				textAlign={"center"}
				boxShadow={boxShadow.normal}
				_hover={{ boxShadow: boxShadow.hover, transform: "scale(1.1)" }}
				transition={"all 0.2s ease-in-out"}
				bg={secondaryColor}
				p={10}
				gap={3}
				borderRadius={10}
				justify={"center"}>
				<Image src={image} alt={name + "_logo"} objectFit="scale-down" h="full" />
				{showName && (
					<Text color={mainColor} as="b">
						{name}
					</Text>
				)}
			</VStack>
		</motion.div>
	);
}
