import { defineConfig, loadEnv } from "vite";
import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    const baseUrl = env.VITE_ROUTER_BASE_URL || "./";

    return {
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
        base: baseUrl,
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
    };
});
