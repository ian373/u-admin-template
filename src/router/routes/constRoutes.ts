import LayoutVue from "@/layout/index.vue";
import { type RouteRecordRaw } from "vue-router";

import MaterialSymbolsSpaceDashboard from "~icons/material-symbols/space-dashboard";

export default [
    {
        path: "/",
        redirect: "dashboard",
        component: LayoutVue,
        children: [
            {
                path: "dashboard",
                name: "Dashboard",
                component: () => import("@/views/dashboard/index.vue"),
                meta: { title: "Dashboard", icon: MaterialSymbolsSpaceDashboard },
            },
        ],
    },
    {
        path: "/login",
        name: "Login",
        hidden: true, // hidden:true 表示不显示在SideMenu里
        component: () => import("@/views/login/index.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        hidden: true,
        component: () => import("@/views/notFound/index.vue"),
    },
] as RouteRecordRaw[];
