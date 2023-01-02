import { ReactNode } from "react";
import ParallaxTilt, { ReactParallaxTiltProps } from "react-parallax-tilt";

interface TiltProps extends ReactParallaxTiltProps {
	children: ReactNode;
	useTilt?: boolean;
}

export function Tilt({ useTilt = true, children, ...rest }: TiltProps) {
	return useTilt ? <ParallaxTilt {...rest}>{children}</ParallaxTilt> : <>{children}</>;
}
