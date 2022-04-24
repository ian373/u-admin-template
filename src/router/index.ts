import { createRouter, createWebHistory } from "vue-router";

import constantRoutes from "./routes/constRoutes";
import { setupRouterGuard } from "./guard";

const routes = constantRoutes;

const router = createRouter({
  // 使用electron时改为hash模式
  // history: createWebHashHistory()
  history: createWebHistory(),
  routes,
});

setupRouterGuard(router);

export default router;
