import {
	Button,
	IconButton,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
	Portal,
	Tooltip,
	useDisclosure,
	useMediaQuery,
	VStack,
} from "@chakra-ui/react";
import { useMemo } from "react";
import Flag from "react-world-flags";
import { useLocales } from "../../../hooks/useLocales";

export function SelectorLanguageButton() {
	const { isOpen, onClose, onToggle } = useDisclosure();
	const { currentLang, allLangs, onChangeLang } = useLocales();
	const [isUp500px] = useMediaQuery("(min-width: 500px)");
	const sizes = useMemo(() => {
		return isUp500px
			? {
					buttonSize: "50px",
					flagSize: 30,
			  }
			: { buttonSize: "40px", flagSize: 20 };
	}, [isUp500px]);

	function handleChangeLang(lang: string) {
		onChangeLang(lang);
		onClose();
	}

	return (
		<Popover placement="auto-end" isOpen={isOpen} onClose={onClose}>
			<PopoverTrigger>
				<Button
					onClick={onToggle}
					minW={sizes.buttonSize}
					minH={sizes.buttonSize}
					borderRadius={10}
					colorScheme={"DefaultButton"}
					padding="0">
					<Flag code={currentLang.flag} width={sizes.flagSize} />
				</Button>
			</PopoverTrigger>
			<Portal>
				<PopoverContent bg="Background2" w="fit-content" borderColor="Background">
					<PopoverArrow bg="Background" boxShadow={"none"} />
					<PopoverBody>
						<VStack align="start">
							{allLangs.map(language => (
								<Tooltip
									key={language.value}
									label={language.label}
									hasArrow
									placement="right"
									bg="Primary">
									<span>
										<IconButton
											bg={
												language.value === currentLang.value
													? "Background"
													: undefined
											}
											minW={sizes.buttonSize}
											minH={sizes.buttonSize}
											aria-label={language.label}
											icon={
												<Flag code={language.flag} width={sizes.flagSize} />
											}
											w="full"
											colorScheme={"DefaultButton"}
											onClick={() => handleChangeLang(language.value)}
										/>
									</span>
								</Tooltip>
							))}
						</VStack>
					</PopoverBody>
				</PopoverContent>
			</Portal>
		</Popover>
	);
}
