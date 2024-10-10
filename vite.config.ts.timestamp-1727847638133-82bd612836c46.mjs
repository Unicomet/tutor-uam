// vite.config.ts
import { defineConfig } from "file:///C:/Users/memo-/Desktop/projects/tutor-uam/node_modules/vite/dist/node/index.js";
import { builderDevTools } from "file:///C:/Users/memo-/Desktop/projects/tutor-uam/node_modules/@builder.io/dev-tools/vite/index.mjs";
import { ghPages } from "file:///C:/Users/memo-/Desktop/projects/tutor-uam/node_modules/vite-plugin-gh-pages/dist/index.js";
import path from "path";
import react from "file:///C:/Users/memo-/Desktop/projects/tutor-uam/node_modules/@vitejs/plugin-react/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\memo-\\Desktop\\projects\\tutor-uam";
var vite_config_default = defineConfig({
  plugins: [react(), builderDevTools(), ghPages()],
  base: "/tutor-uam",
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtZW1vLVxcXFxEZXNrdG9wXFxcXHByb2plY3RzXFxcXHR1dG9yLXVhbVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbWVtby1cXFxcRGVza3RvcFxcXFxwcm9qZWN0c1xcXFx0dXRvci11YW1cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL21lbW8tL0Rlc2t0b3AvcHJvamVjdHMvdHV0b3ItdWFtL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7IGJ1aWxkZXJEZXZUb29scyB9IGZyb20gXCJAYnVpbGRlci5pby9kZXYtdG9vbHMvdml0ZVwiO1xuaW1wb3J0IHsgZ2hQYWdlcyB9IGZyb20gXCJ2aXRlLXBsdWdpbi1naC1wYWdlc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBidWlsZGVyRGV2VG9vbHMoKSwgZ2hQYWdlcygpXSxcbiAgYmFzZTogXCIvdHV0b3ItdWFtXCIsXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5VCxTQUFTLG9CQUFvQjtBQUN0VixTQUFTLHVCQUF1QjtBQUNoQyxTQUFTLGVBQWU7QUFDeEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sV0FBVztBQUpsQixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztBQUFBLEVBQy9DLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
