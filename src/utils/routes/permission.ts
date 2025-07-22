import router from "@/router/index";
import { useUserStore } from "@/store/user";
import { filterAsyncRoutes } from "@/utils/routes/parseRoutes";
import roleRoutes from "@/router/routes/roleRoutes";
import constRoutes from "@/router/routes/constRoutes";

import { request_client } from "@/utils/request";
import { UserApi, type UserInfoResponse } from "@/api/user";
import { getToken, removeToken } from "@/utils/user";
import { Role } from "@/types/routes.ts";

export function setUserRoutes(role: Role) {
    const userStore = useUserStore();

    const allRoutes = constRoutes;
    const routesList = filterAsyncRoutes(roleRoutes, role);
    for (const route of routesList) {
        allRoutes.push(route);
        router.addRoute(route);
    }
    userStore.routes = allRoutes;
}

export async function permissionHandle() {
    const userStore = useUserStore();
    const token = getToken();
    if (token) {
        try {
            userStore.token = token;

            // 真实的请求
            userStore.token = token;
            const {
                data: { data },
            } = await request_client.get<UserInfoResponse>(UserApi.getUserInfo);
            // 默认后端数据和前端的role字符串能够对上，直接映射
            userStore.role = data.role as Role;
            setUserRoutes(userStore.role);
            return true;
        } catch {
            removeToken();
            userStore.token = "";
            return false;
        }
    } else {
        return false;
    }
}
