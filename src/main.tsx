import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "modern-css-reset/dist/reset.min.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
