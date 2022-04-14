import { createRouter, createWebHistory } from "vue-router";

import constantRoutes from "./routes/constant";

const routes = constantRoutes;

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
