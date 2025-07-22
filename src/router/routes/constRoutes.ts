import LayoutIndexVue from "@/layout/LayoutIndex.vue";
import { type RouteRecordRaw } from "vue-router";

import MaterialSymbolsSpaceDashboard from "~icons/material-symbols/space-dashboard";

export default [
    {
        path: "/",
        redirect: "dashboard",
        component: LayoutIndexVue,
        children: [
            {
                path: "dashboard",
                name: "Dashboard",
                component: () => import("@/views/dashboard/DashboardIndex.vue"),
                meta: { title: "Dashboard", icon: MaterialSymbolsSpaceDashboard },
            },
        ],
    },
    {
        path: "/login",
        name: "Login",
        meta: { hidden: true },
        component: () => import("@/views/login/LoginIndex.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        meta: { hidden: true },
        component: () => import("@/views/notFound/NotFoundIndex.vue"),
    },
] as RouteRecordRaw[];
