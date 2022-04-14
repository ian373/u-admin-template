import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import { resolve } from "path";

const NODE_ENV = process.env.NODE_ENV || "development";
const config = { base: "" };
if (NODE_ENV === "production") {
  config.base = "/utodo/";
}

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "#": resolve(__dirname, "src/components"),
    },
  },
  base: config.base,
  build: {
    cssTarget: "chrome61",
  },
  server: {
    host: "localhost",
    port: 8000,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:4523/mock/602861",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/utodo/, ""),
        // ws: true,
      },
    },
  },
});
