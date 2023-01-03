import { Flex, Tag, Text, useMediaQuery } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import {
	VerticalTimelineElement,
	VerticalTimelineElementProps,
} from "react-vertical-timeline-component";
import { useTheme } from "../../../hooks/useTheme";

interface EducationTimelineElementProps extends VerticalTimelineElementProps {
	title: string;
	company: string;
	location: string;
	description: string;
	tags?: string[];
}

export function EducationTimelineElement({
	title,
	location,
	description,
	company,
	tags,
	...rest
}: EducationTimelineElementProps) {
	const { colors } = useTheme();
	const [isUp1200px] = useMediaQuery("(min-width: 1200px)");

	const defaultStyles = {
		background: colors.Background,
		color: colors.Foreground,
	};
	const mainColor = colors.Green;
	const contrastMainColor = colors.Foreground;

	return (
		<VerticalTimelineElement
			icon={<Icon icon="ic:round-school" color={contrastMainColor} />}
			contentStyle={{
				...defaultStyles,
				boxShadow: "none",
				borderBottom: `5px solid ${mainColor}`,
			}}
			contentArrowStyle={{ borderRight: `7px solid  ${defaultStyles.background}` }}
			iconStyle={{ ...defaultStyles, background: mainColor }}
			{...rest}>
			<Flex direction="column" sx={{ "*": { margin: "0!important" } }}>
				<Text as="b" fontSize="xl">
					{title}
				</Text>
				<Text as="b" color={mainColor}>
					{company}
				</Text>
				<Text>{location}</Text>
			</Flex>

			<Text>{description}</Text>
			<Flex wrap="wrap" gap={3} justify={isUp1200px ? "center" : "left"} mt={4}>
				{tags.map((tag, index) => (
					<Tag key={index} bg={mainColor} fontWeight="bold">
						{tag}
					</Tag>
				))}
			</Flex>
		</VerticalTimelineElement>
	);
}
