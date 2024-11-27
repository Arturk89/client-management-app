import { defineConfig } from "vite";
import * as path from "path";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      layout: path.resolve(__dirname, "./src/layout"),
      common: path.resolve(__dirname, "./src/common"),
    },
  },
});
