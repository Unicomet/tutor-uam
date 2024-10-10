/// <reference types="vitest" />

import { defineConfig } from "vite";
import { ghPages } from "vite-plugin-gh-pages";
import path from "path";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), ghPages()],
  test: {
    //config de vitest
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
  base: "/tutor-uam",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
