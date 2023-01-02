import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/bebas-neue";
import "@fontsource/jetbrains-mono";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { theme } from "./global/styles/theme";
import { router } from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<RouterProvider router={router} />
		</ChakraProvider>
	</React.StrictMode>
);