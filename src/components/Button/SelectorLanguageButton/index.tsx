import {
	Button,
	IconButton,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
	Portal,
	VStack,
} from "@chakra-ui/react";
import Flag from "react-world-flags";
import { languages } from "../../../mock/languages";

export function SelectorLanguageButton() {
	return (
		<Popover placement="auto-end">
			<PopoverTrigger>
				<Button
					minW={50}
					minH={50}
					borderRadius={10}
					colorScheme={"DefaultButton"}
					padding="0">
					<Flag code="br" width="30" />
				</Button>
			</PopoverTrigger>
			<Portal>
				<PopoverContent bg="Background2" w="fit-content" borderColor="Background">
					<PopoverArrow bg="Background" boxShadow={"none"} />

					<PopoverBody>
						<VStack align="start">
							{languages.map(language => (
								<IconButton
									minW={50}
									minH={50}
									aria-label={language.label}
									icon={<Flag code={language.value} width="30" />}
									key={language.id}
									w="full"
									colorScheme={"DefaultButton"}
								/>
							))}
						</VStack>
					</PopoverBody>
				</PopoverContent>
			</Portal>
		</Popover>
	);
}
