import { type RouteRecordRaw } from "vue-router";
import LayoutIndex from "@/layout/LayoutIndex.vue";
import MaterialSymbolsCodeBlocks from "~icons/material-symbols/code-blocks";
import MaterialSymbolsNestFoundSavingsSharp from "~icons/material-symbols/nest-found-savings-sharp";

export default [
    {
        path: "/routeslevel2",
        redirect: "/routeslevel2/test1",
        component: LayoutIndex,
        meta: {
            title: "二级路由",
            icon: MaterialSymbolsCodeBlocks,
            roles: [0],
        },
        children: [
            {
                path: "test1",
                name: "test1",
                component: () => import("@/views/nested/NestedPage1.vue"),
                meta: {
                    cache: true, //是否缓存页面
                    title: "页面1",
                    roles: [-1, 0],
                },
            },
            {
                path: "test2",
                name: "test2",
                component: () => import("@/views/nested/NestedPage2.vue"),
                meta: {
                    title: "页面2",
                    roles: [0],
                },
            },
        ],
    },
    {
        path: "/routeslevel3",
        redirect: "/routeslevel3/sub1",
        component: LayoutIndex,
        meta: {
            title: "三级路由",
            icon: MaterialSymbolsNestFoundSavingsSharp,
            roles: [0],
        },
        children: [
            {
                path: "sub1",
                name: "sub1",
                component: () => import("@/views/nested/NestedPage3.vue"),
                meta: { title: "页面1" },
            },
            {
                path: "submenu",
                redirect: "/routeslevel3/submenu/sub2",
                component: () => import("@/views/nested/NestedPage4.vue"),
                meta: { title: "三级菜单" },
                children: [
                    {
                        path: "sub2",
                        component: () => import("@/views/nested/NestedPage5.vue"),
                        meta: { title: "页面2" },
                    },
                    {
                        path: "sub3",
                        component: () => import("@/views/nested/NestedPage6.vue"),
                        meta: { title: "页面3" },
                    },
                ],
            },
        ],
    },
] as RouteRecordRaw[];
