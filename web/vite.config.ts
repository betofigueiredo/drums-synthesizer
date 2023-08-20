import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 5050 },
  resolve: {
    alias: {
      components: "/src/components",
      hooks: "/src/hooks",
      pages: "/src/pages",
      services: "/src/services",
      styles: "/src/styles",
      types: "/src/types",
      utils: "/src/utils",
    },
  },
});
