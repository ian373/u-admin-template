import { type Router } from "vue-router";

import { useUserStore } from "@/store/user";
import { useAppStore } from "@/store/app";
import { permissionHandle } from "@/utils/routes/permission";

export function createBeforeGuard(router: Router) {
    router.beforeEach(async (to, from) => {
        // 是否每次guard都要访问store?
        const appStore = useAppStore();

        // console.log("beforeGuard: ", from.path, " => ", to.path);

        // 刷新或首次访问网站，from.path === '/'
        if (from.path === "/") {
            // 鉴权
            const userStore = useUserStore();
            if (userStore.token) {
                if (to.path === "/login") {
                    return "/dashboard";
                }
                // 这里什么也不做，放行路由，不能return to.path, 否则会无限重定向
            } else {
                const success = await permissionHandle();
                if (success) {
                    // 只要return了一个路由地址，那么就会触发新的导航
                    // 因为permissionHandle()中添加了动态路由，如果这里的to.path是动态路由，必须触发一次新的导航
                    return to.path;
                } else {
                    if (to.path !== "/login") {
                        return "/login";
                    }
                }
            }
        }

        // 首次加载组件时启用loading动画,放在鉴权后面
        if (!appStore.visitedPaths.includes(to.path)) {
            appStore.addVisitedPath(to.path);
            if (!appStore.mainLoading) {
                appStore.toggleMainLoading();
            }
        }
    });
}
