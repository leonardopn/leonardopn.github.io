export interface GenerateGlowProps {
	showGlow: boolean;
	color?: string;
}

const defaultFlowConfigs: GenerateGlowProps = { showGlow: true, color: "GradientDefault" };

export function generateGlow(options: GenerateGlowProps = defaultFlowConfigs) {
	const { showGlow = true, color = "GradientDefault" } = options;
	return {
		content: "''",
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		bg: color,
		filter: `blur(${showGlow ? 15 : 0}px)`,
		zIndex: -1,
		borderRadius: 10,
		transition: "filter 0.3s ease-in-out",
	};
}
