import { Router } from "vue-router";

import { useUserStore } from "@/store/user";
import { useAppStore } from "@/store/app";
import { permissionHandle } from "@/utils/routes/permission";

export function createBeforeGuard(router: Router) {
  router.beforeEach(async (to, _from) => {
    // 是否每次guard都要访问store?
    const userStore = useUserStore();
    const appStore = useAppStore();
    // 调试
    // console.log("beforeGuard: ", from.path, " => ", to.path);

    // 鉴权
    if (userStore.token) {
      if (to.path === "/login") {
        return "/dashboard";
      }
    } else {
      const success = await permissionHandle();
      if (success) {
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
      if (!appStore.mainLoading) {
        appStore.toggleMainLoading();
      }
    }
  });
}
