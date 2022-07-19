import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import { resolve } from "path";

const NODE_ENV = process.env.NODE_ENV || "development";
const config = { base: "" };
// vite打包时，会设置NODE_ENV='production'
if (NODE_ENV === "production") {
  // 如果项目不在服务的根目录下，需要配置打包路径
  config.base = "/uadmin-temp/";

  // 用于electron打包，改为相对路径，等价于 base = ""
  // config.base = "./";
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
        target: "http://127.0.0.1:4523/m1/1250186-0-default",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        // ws: true,
      },
    },
  },
});
