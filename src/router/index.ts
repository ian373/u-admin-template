import { createRouter, createWebHistory } from "vue-router";
import { setupRouterGuard } from "./guard";
import { getRouterBaseUrl } from "@/utils/routes/router_base_url";

import constantRoutes from "./routes/constRoutes";

const baseUrl = getRouterBaseUrl();
const routes = constantRoutes;

const router = createRouter({
    // 使用electron时改为hash模式
    // history: createWebHashHistory()
    history: createWebHistory(baseUrl), //如果项目部署在服务器子目录上，需要指定前置路径
    routes,
});

setupRouterGuard(router);

export default router;
