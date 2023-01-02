import { useMemo, useState } from "react";
import { generateGlow, GenerateGlowProps } from "../global/styles/Glow";

interface useGlowProps extends GenerateGlowProps {}

const defaultProps: useGlowProps = { showGlow: false };

export function useGlow(options?: useGlowProps) {
	const currentOptions = { ...defaultProps, ...options };
	const { showGlow } = currentOptions;

	const [isShowGlow, setIsShowGlow] = useState(showGlow);

	function onShowGlow() {
		setIsShowGlow(true);
	}

	function onHideGlow() {
		setIsShowGlow(false);
	}

	function onToggleGlow() {
		setIsShowGlow(oldState => !oldState);
	}

	const glow = useMemo(
		() => generateGlow({ ...currentOptions, showGlow: isShowGlow }),
		[currentOptions, isShowGlow]
	);

	return { glow, onShowGlow, onHideGlow, onToggleGlow, isShowGlow };
}
