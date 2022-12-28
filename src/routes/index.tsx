import { createBrowserRouter } from "react-router-dom";
import { App } from "../pages/App";
import { Page404 } from "../pages/Page404";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [{ path: "/portfolio-web", element: <App /> }],
		errorElement: <Page404 />,
	},
]);
