import { createRouter, createWebHistory } from "vue-router";

import constantRoutes from "./routes/constRoutes";
import { setupRouterGuard } from "./guard";

const routes = constantRoutes;

const router = createRouter({
  history: createWebHistory(),
  routes,
});

setupRouterGuard(router);

export default router;
