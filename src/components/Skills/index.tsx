import { Grid } from "@chakra-ui/react";
import { shuffle } from "lodash";
import { useMemo } from "react";
import { useMe } from "../../hooks/useMe";
import { Skill } from "./Skill";

export function Skills() {
	const { skills } = useMe();

	const randomSkills = useMemo(() => shuffle(skills), [skills]);

	return (
		<Grid
			templateColumns="repeat(auto-fill, 150px)"
			autoRows={"30px"}
			gap={8}
			justifyContent="center">
			{randomSkills.map((skill, index) => (
				<Skill key={index} {...skill} className="skills-stack" />
			))}
		</Grid>
	);
}
