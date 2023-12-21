import { useMediaQuery } from "@chakra-ui/react";
import type { Container } from "@tsparticles/engine";
import TsParticles, { IParticlesProps, initParticlesEngine } from "@tsparticles/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { loadFull } from "tsparticles";
import { useTheme } from "../../hooks/useTheme";

interface ParticlesProps extends IParticlesProps {}

export function Particles({ options, ...restProps }: ParticlesProps) {
	const { colors } = useTheme();
	const [isUp480] = useMediaQuery("(min-width: 500px)");

	const [init, setInit] = useState(false);

	// this should be run only once per application lifetime
	useEffect(() => {
		initParticlesEngine(async engine => {
			// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
			// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
			// starting from v2 you can add only the features you need reducing the bundle size
			//await loadAll(engine);
			//await loadFull(engine);
			await loadFull(engine);
			//await loadBasic(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = useCallback(async (container: Container | undefined) => {
		import.meta.env.DEV && console.log(container);
	}, []);

	const mainColor = useMemo(() => colors.Primary, [colors]);

	const defaultParticlesOptions = useMemo<IParticlesProps["options"]>(
		() => ({
			background: {
				color: {
					value: colors.Background,
				},
			},
			smooth: true,

			fpsLimit: 60,
			interactivity: {
				events: {
					onClick: {
						enable: true,
						mode: "push",
					},
					onHover: {
						enable: true,
						mode: "repulse",
					},
					resize: { enable: true },
				},
				modes: {
					push: {
						quantity: 4,
					},
					repulse: {
						distance: 200,
						duration: 0.4,
					},
				},
			},
			particles: {
				color: {
					value: mainColor,
				},
				links: {
					color: mainColor,
					distance: 150,
					enable: true,
					opacity: 0.5,
					width: 1,
				},
				collisions: {
					enable: true,
				},
				move: {
					direction: "none",
					enable: true,
					outModes: {
						default: "bounce",
					},
					random: false,
					speed: 1.5,
					straight: false,
				},
				number: {
					density: {
						enable: true,
						area: 800,
					},
					value: 80,
				},
				opacity: {
					value: 1,
				},
				shape: {
					type: "square",
				},
				size: {
					value: { min: 1, max: 5 },
				},
			},
			detectRetina: true,
		}),
		[]
	);

	//NOTE: disable particles on mobile
	if (!isUp480) return null;

	if (init)
		return (
			<TsParticles
				id="tsparticles"
				particlesLoaded={particlesLoaded}
				options={options ?? defaultParticlesOptions}
				{...restProps}
			/>
		);
}
