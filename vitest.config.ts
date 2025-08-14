import { fileURLToPath } from "node:url";
import { mergeConfig, defineConfig, configDefaults } from "vitest/config";
import viteConfig from "./vite.config";

export default defineConfig((env) => {
    const resolvedViteConfig = viteConfig(env);

    return mergeConfig(resolvedViteConfig, {
        test: {
            environment: "jsdom",
            exclude: [...configDefaults.exclude, "e2e/**"],
            root: fileURLToPath(new URL("./", import.meta.url)),
        },
    });
});
