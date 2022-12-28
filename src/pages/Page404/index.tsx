import { Button, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router";

export function Page404() {
	const navigate = useNavigate();

	return (
		<VStack justify="center" align="center" minH="100vh" bg="Background" textAlign={"center"}>
			<VStack
				justify="center"
				align="center"
				bg="Background2"
				borderRadius={10}
				p={10}
				gap={10}>
				<Text fontSize={"4xl"} as="b">
					Essa página não existe 😅
				</Text>
				<VStack>
					<Text fontSize={"xl"}>Deseja voltar ao início?</Text>
					<Button colorScheme={"blue"} onClick={() => navigate("/")}>
						Voltar
					</Button>
				</VStack>
			</VStack>
		</VStack>
	);
}
