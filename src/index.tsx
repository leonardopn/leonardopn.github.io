import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/bebas-neue";
import "@fontsource/jetbrains-mono";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { theme } from "./global/styles/theme";
import { router } from "./routes";
import "./configs/i18n";

import "react-vertical-timeline-component/style.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<RouterProvider router={router} />
		</ChakraProvider>
	</React.StrictMode>
);
