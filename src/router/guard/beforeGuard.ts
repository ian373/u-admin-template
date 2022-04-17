import { Router } from "vue-router";

import { useUserStore } from "@/store/user";
import { permissionHandle } from "@/utils/routes/permission";

export function createBeforeGuard(router: Router) {
  router.beforeEach(async (to, from) => {
    // TODO:是否每次guard都会访问store?
    const userStore = useUserStore();
    // 调试
    // console.log("beforeGuard: ", from.path, " => ", to.path);

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
  });
}
