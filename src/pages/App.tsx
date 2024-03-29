import { Divider, Flex, useMediaQuery } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { AccessCard } from "../components/AccessCard";
import { Navbar } from "../components/Navbar";
import { Particles } from "../components/Particles";
import { CardMainInformation } from "../components/CardMainInformation";
import { ScrollNavigationProvider } from "../contexts/ScrollNavigationContext";

export function App() {
	const [isUp1280px] = useMediaQuery("(min-width: 1280px)");
	const [isUp500px] = useMediaQuery("(min-width: 500px)");

	return (
		<ScrollNavigationProvider>
			<Flex direction={isUp500px ? "row" : "column"}>
				<Navbar />
				<Flex
					marginX={"auto"}
					maxW={"105rem"}
					minH="100vh"
					direction={isUp1280px ? "row" : "column"}
					align={isUp1280px ? "normal" : "center"}>
					<Particles />
					<AccessCard />
					{!isUp500px && (
						<AnimatePresence>
							<motion.div
								{...{
									initial: { opacity: 0 },
									animate: { opacity: 1, width: "100%" },
									transition: { delay: 1 },
								}}>
								<Divider />
							</motion.div>
						</AnimatePresence>
					)}
					<CardMainInformation />
				</Flex>
			</Flex>
		</ScrollNavigationProvider>
	);
}
