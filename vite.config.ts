import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";

const NODE_ENV = process.env.NODE_ENV || "development";
const config = { base: "./" };
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
        vueDevTools({ launchEditor: "webstorm" }),
        Icons({ autoInstall: true }),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            "#": fileURLToPath(new URL("./src/components", import.meta.url)),
        },
    },
    base: config.base,
    server: {
        host: "127.0.0.1",
        port: 8000,
        proxy: {
            "/api": {
                target: "http://127.0.0.1:4523/m1/1250186-334443-default",
                rewrite: (path) => path.replace(/^\/api/, ""),
                changeOrigin: true,
            },
        },
    },
});
