
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],

  // GitHub Pages build ke liye /redesign/
  // Local development ke liye /
  base: command === "build" ? "/redesign/" : "/",
}));

