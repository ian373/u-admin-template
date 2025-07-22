import { type RouteRecordRaw } from "vue-router";
import { Role } from "@/types/routes.ts";

function hasPermission(route: RouteRecordRaw, role: Role) {
    const meta = route.meta;
    if (meta?.roles) {
        return meta.roles.includes(role);
    } else {
        return true;
    }
}

export function filterAsyncRoutes(asyncRoutes: RouteRecordRaw[], role: Role): RouteRecordRaw[] {
    const res = [];

    for (const route of asyncRoutes) {
        //防止原route对象被修改
        const temp = { ...route };
        if (hasPermission(temp, role)) {
            if (temp.children) {
                temp.children = filterAsyncRoutes(temp.children, role);
            }
            res.push(temp);
        }
    }
    return res;
}
