// HARD REDIRECT: /location/* → /locations/* before any React/auth/routing
// Must run synchronously at the earliest possible moment
const path = window.location.pathname;
if (path === "/location" || path.startsWith("/location/")) {
  const newPath = "/locations" + path.slice("/location".length);
  window.location.replace(newPath + window.location.search + window.location.hash);
  // Stop execution - page will reload at new URL
  throw new Error("Redirecting to canonical /locations path");
}

import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
