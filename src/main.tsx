// Vstupní soubor aplikace.
// Načte styly a hlavní komponentu App a vykreslí ji do prvku #root v index.html.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
