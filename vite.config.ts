import { defineConfig } from "vite";
import { builderDevTools } from "@builder.io/dev-tools/vite";
import react from "@vitejs/plugin-react";
import { ghPages } from "vite-plugin-gh-pages";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), builderDevTools(), ghPages()],
  base: "/tutor-uam",
});
