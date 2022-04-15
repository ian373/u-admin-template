<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

import { useUserStore } from "./store/user";
import { filterAsyncRoutes } from "@/utils/routes/parseRoutes";
import roleRoutes from "@/router/routes/roleRoutes";

const router = useRouter();
const userStore = useUserStore();

// 设置app的宽度
const setHeight = () => {
  const height = window.innerHeight;
  (document.getElementById("app") as HTMLElement).style.height = height + "px";
};
setHeight();

window.addEventListener("resize", setHeight);

// 验证token
const token = localStorage.getItem("UAdminToken");
if (token) {
  //验证token，获取user相关信息，写入store，通过跳转到/dashboard
  userStore.setRole(0);

  const routesList = filterAsyncRoutes(roleRoutes, 0);
  userStore.setRoutes(routesList);
  for (let route of routesList) {
    router.addRoute(route);
  }

  if (router.currentRoute.value.path === "/login") {
    router.push("/dashboard");
  }

  // 如果token失效的相关逻辑
  // ...
} else {
  if (router.currentRoute.value.path !== "/login") {
    router.push("/login");
  }
}
</script>

<style>
#app {
  width: 100%;
}
</style>
