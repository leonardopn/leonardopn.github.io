import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { JobTimelineElement } from "./JobTimelineElement";
import "react-vertical-timeline-component/style.min.css";
import { useMemo } from "react";
import { useMe } from "../../hooks/useMe";
import { Icon } from "@iconify/react";
import { useTheme } from "../../hooks/useTheme";
import { EducationTimelineElement } from "./EducationTimelineElement";

export function Timeline() {
	const { timeline } = useMe();
	const {
		colors: { GradientDefault },
	} = useTheme();

	const timelineElements = useMemo(
		() =>
			timeline.map((job, index) => {
				switch (job.type) {
					case "EDUCATION":
						return (
							<EducationTimelineElement
								visible
								key={index}
								title={job.role}
								location={job.location}
								description={job.description}
								company={job.company}
								date={job.period}
								tags={job.tags}
							/>
						);

					default:
						return (
							<JobTimelineElement
								visible
								key={index}
								title={job.role}
								location={job.location}
								description={job.description}
								company={job.company}
								date={job.period}
								tags={job.tags}
							/>
						);
				}
			}),
		[timeline]
	);

	return (
		<VerticalTimeline>
			{timelineElements}
			<VerticalTimelineElement
				icon={<Icon icon="mdi:star-circle" />}
				iconStyle={{ background: GradientDefault }}
			/>
		</VerticalTimeline>
	);
}
