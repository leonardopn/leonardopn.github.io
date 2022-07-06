import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Reset as ResetCSS } from "styled-reset";
import theme from "./global/styles/theme";
import { App } from "./pages/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<ResetCSS />
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
