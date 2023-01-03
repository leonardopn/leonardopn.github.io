import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { JobTimelineElement } from "./JobTimelineElement";
import "react-vertical-timeline-component/style.min.css";
import { useMemo } from "react";
import { useMe } from "../../hooks/useMe";
import { Icon } from "@iconify/react";
import { useTheme } from "../../hooks/useTheme";

export function Timeline() {
	const { timeline } = useMe();
	const {
		colors: { GradientDefault },
	} = useTheme();

	const timelineElements = useMemo(
		() =>
			timeline.map((job, index) => (
				<JobTimelineElement
					key={index}
					title={job.role}
					location={job.location}
					description={job.description}
					company={job.company}
					date={job.period}
					tags={job.tags}
				/>
			)),
		[timeline]
	);

	return (
		<VerticalTimeline>
			{timelineElements}
			<VerticalTimelineElement
				icon={<Icon icon="mdi:star-circle" />}
				iconStyle={{ background: GradientDefault, color: "#fff" }}
			/>
		</VerticalTimeline>
	);
}
