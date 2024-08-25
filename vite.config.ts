import { defineConfig } from "vite";
import { builderDevTools } from "@builder.io/dev-tools/vite";
import react from "@vitejs/plugin-react";
import { ghPages } from "vite-plugin-gh-pages";
import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), builderDevTools(), ghPages()],
  base: "/tutor-uam",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
