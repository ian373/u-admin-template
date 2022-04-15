import { RouteRecordRaw } from "vue-router";

import Layout from "@/layout/index.vue";

export default [
  {
    path: "/permission",
    redirect: "/permission/page-one",
    component: Layout,
    meta: {
      title: "权限页面",
      icon: "#icon-quanxianshenpi",
      roles: [0],
    },
    children: [
      {
        path: "page-one",
        name: "PageOne",
        component: () => import("@/views/permission/p-page01.vue"),
        meta: {
          title: "权限页面1",
          roles: [-1, 0],
        },
      },
      {
        path: "page-two",
        name: "PageTwo",
        component: () => import("@/views/permission/p-page02.vue"),
        meta: {
          title: "权限页面2",
          roles: [0],
        },
      },
    ],
  },
  // FIXME:如果是多级路由但第二级只有只有一项，比如A-1-a-w这种情况渲染menu时会判为是一级路由
  {
    path: "/test",
    redirect: "/test/page01",
    component: Layout,
    meta: {
      title: "三级路由",
      icon: "#icon-info-circle-fill",
      roles: [0],
    },
    children: [
      {
        path: "page01",
        name: "Page01",
        component: () => import("@/views/test-page/page01.vue"),
        meta: { title: "页面1" },
      },
      {
        path: "submenu",
        redirect: "/test/submenu/page02",
        component: () => import("@/views/test-page/Nested.vue"),
        meta: { title: "三级菜单" },
        // component: ,
        children: [
          {
            path: "page02",
            component: () => import("@/views/test-page/page02.vue"),
            meta: { title: "页面2" },
          },
          {
            path: "page03",
            component: () => import("@/views/test-page/page03.vue"),
            meta: { title: "页面3" },
          },
        ],
      },
    ],
  },
] as RouteRecordRaw[];
