import router from "@/router/index";
import { useUserStore } from "@/store/user";
import { filterAsyncRoutes } from "@/utils/routes/parseRoutes";
import roleRoutes from "@/router/routes/roleRoutes";
import constRoutes from "@/router/routes/constRoutes";

export function setUserRoutes(role: number) {
  const userStore = useUserStore();

  const allRoutes = constRoutes;
  const routesList = filterAsyncRoutes(roleRoutes, role);
  for (let route of routesList) {
    allRoutes.push(route);
    router.addRoute(route);
  }
  userStore.setRoutes(allRoutes);
}

export async function permissionHandle() {
  const userStore = useUserStore();

  const token = localStorage.getItem("UAdminToken");
  if (token) {
    //验证token，获取user相关信息，写入store
    // http请求===========
    // ...
    userStore.setRole(0);
    userStore.setToken(token);
    // =====================

    // 添加所有路由
    setUserRoutes(0);

    return true;
    // 如果token失效的相关逻辑
    // ...
  } else {
    return false;
  }
}
