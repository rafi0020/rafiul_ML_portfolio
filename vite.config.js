import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/rafiul_ML_portfolio/",
  plugins: [react()],
  server: {
    port: 5173,
  },
});
