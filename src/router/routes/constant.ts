import LayoutVue from "@/layout/index.vue";

import { RouteRecordRaw } from "vue-router";

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
        meta: { title: "Dashboard" },
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    hidden: true, // hidden:true 表示不显示在SideMenu里
    component: () => import("@/views/login/index.vue"),
  },
] as RouteRecordRaw[];
