import { type Router } from "vue-router";

import { useAppStore } from "@/store/app";
import { permissionHandle } from "@/utils/routes/permission";

let routesInitialized = false;

export function createBeforeGuard(router: Router) {
    router.beforeEach(async (to, from) => {
        // 是否每次guard都要访问store?
        const appStore = useAppStore();
        // console.log("beforeGuard: ", from.path, " => ", to.path);

        if (from.path === "/" && !routesInitialized) {
            const isSuccess = await permissionHandle();
            routesInitialized = true;

            if (isSuccess) {
                if (to.path === "/login") {
                    return "/dashboard";
                }
                // 因为permissionHandle()中添加了动态路由，如果这里的to.path是动态路由，必须触发一次新的导航
                return to.path;
            } else {
                if (to.path !== "/login") {
                    return "/login";
                }
            }
        }

        // 首次加载组件时启用loading动画,放在鉴权后面
        if (!appStore.visitedPaths.includes(to.path)) {
            appStore.addVisitedPath(to.path);
            if (!appStore.isMainLoading) {
                appStore.toggleMainLoading();
            }
        }
    });
}
