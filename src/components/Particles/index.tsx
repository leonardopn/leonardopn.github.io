import { useCallback, useMemo } from "react";
import TsParticles, { IParticlesProps } from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { useTheme } from "../../hooks/useTheme";

interface ParticlesProps extends IParticlesProps {}

export function Particles({ options, ...restProps }: ParticlesProps) {
	const { colors } = useTheme();

	const particlesInit = useCallback(async (engine: Engine) => {
		console.log(engine);
		// NOTE: you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		import.meta.env.DEV && (await loadFull(engine));
	}, []);

	const particlesLoaded = useCallback(async (container: Container | undefined) => {
		import.meta.env.DEV && console.log(container);
	}, []);

	const defaultParticlesOptions = useMemo<IParticlesProps["options"]>(
		() => ({
			background: {
				color: {
					value: colors.Background,
				},
			},
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
					resize: true,
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
					value: colors.Cyan,
				},
				links: {
					color: colors.Cyan,
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
					value: 0.5,
				},
				shape: {
					type: "circle",
				},
				size: {
					value: { min: 1, max: 5 },
				},
			},
			detectRetina: true,
		}),
		[]
	);

	return (
		<TsParticles
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={options ?? defaultParticlesOptions}
			{...restProps}
		/>
	);
}
