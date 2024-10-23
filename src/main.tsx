import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ThemeProvider } from "@/contexts/theme.context";

import { App } from "@/App";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
