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
	className?: string;
}

export function Skill({ image, name, mainColor, secondaryColor, className }: SkillProps) {
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
			initial: { opacity: 0, transform: "scale(1)" },
			animate: { opacity: 1, transform: "scale(1.1)" },
			transition: {
				duration: 2,
				ease: "easeInOut",
				times: [0, 0.2, 0.5, 0.8, 1],
				repeat: Infinity,
				repeatDelay: 1,
			},
		}),
		[]
	);

	return (
		<motion.div {...defaultAnimation}>
			<VStack
				gridRowEnd={sizes.span}
				className={className}
				textAlign={"center"}
				boxShadow={boxShadow.normal}
				_hover={{ boxShadow: boxShadow.hover, transform: "scale(1.1)" }}
				bg={secondaryColor}
				p={10}
				gap={3}
				borderRadius={10}
				justify={"center"}>
				<Image src={image} alt={name + "_logo"} />
				<Text color={mainColor} as="b">
					{name}
				</Text>
			</VStack>
		</motion.div>
	);
}
