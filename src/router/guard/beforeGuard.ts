import { Router } from "vue-router";

import { useUserStore } from "@/store/user";

export function createBeforeGuard(router: Router) {
  router.beforeEach((to, from) => {
    const userStore = useUserStore();
    // 调试
    console.log("beforeGuard: ", from.path, " => ", to.path);
    // 防止登录以后，用户输入/login而去了login页面
    if (to.path === "/login" && from.path === "/") {
      if (userStore.token) {
        return "/dashboard";
      }
    }
  });
}
