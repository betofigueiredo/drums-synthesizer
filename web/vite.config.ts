import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { host: true, port: 5050 },
  resolve: {
    alias: {
      components: "/src/components",
      modules: "/src/modules",
      features: "/src/features",
      hooks: "/src/hooks",
      pages: "/src/pages",
      services: "/src/services",
      styles: "/src/styles",
      types: "/src/types",
      utils: "/src/utils",
    },
  },
});
