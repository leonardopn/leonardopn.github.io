import Color from "color";
import { useMemo } from "react";

export function useBoxShadow(color: string) {
	const boxShadow = useMemo(() => {
		const colorScale = {
			0.4: Color(color).alpha(0.4).toString(),
			0.3: Color(color).alpha(0.3).toString(),
			0.2: Color(color).alpha(0.2).toString(),
			0.1: Color(color).alpha(0.1).toString(),
			0.05: Color(color).alpha(0.05).toString(),
		};

		return {
			hover: `${colorScale["0.4"]} -5px 5px, ${colorScale["0.3"]} -10px 10px, ${colorScale["0.2"]} -15px 15px, ${colorScale["0.1"]} -20px 20px, ${colorScale["0.05"]} -25px 25px`,
			normal: `${colorScale["0.4"]} -0px 0px, ${colorScale["0.3"]} -5px 5px, ${colorScale["0.2"]} -10px 10px, ${colorScale["0.1"]} -15px 15px, ${colorScale["0.05"]} -20px 20px`,
		};
	}, [color]);

	return boxShadow;
}
