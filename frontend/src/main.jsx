import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SiteProvider } from "./context/SiteContext";
import App from "./App";
import "./styles/styles.css";

createRoot(document.getElementById("root")).render(
  <SiteProvider>
    <StrictMode>
      <App></App>
    </StrictMode>
  </SiteProvider>,
);
