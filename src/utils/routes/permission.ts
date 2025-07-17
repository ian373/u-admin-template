import router from "@/router/index";
import { useUserStore } from "@/store/user";
import { filterAsyncRoutes } from "@/utils/routes/parseRoutes";
import roleRoutes from "@/router/routes/roleRoutes";
import constRoutes from "@/router/routes/constRoutes";

import { request } from "@/utils/request/index";
import { UserApi } from "@/api/user";
import { getToken, removeToken } from "@/utils/user";

export function setUserRoutes(role: number) {
    const userStore = useUserStore();

    const allRoutes = constRoutes;
    const routesList = filterAsyncRoutes(roleRoutes, role);
    for (let route of routesList) {
        allRoutes.push(route);
        router.addRoute(route);
    }
    userStore.setRoutes(allRoutes);
}

export async function permissionHandle() {
    const userStore = useUserStore();

    const token = getToken();
    if (token) {
        try {
            // ============no-request: on=========
            if (import.meta.env.VITE_NO_REQUEST === "on") {
                userStore.setRole(0);
                userStore.setToken(token);
                setUserRoutes(0);
                return true;
            }
            // ======================
            (request.defaults.headers as any).authorization = token;
            const res = (await request.get(UserApi.getUserInfo)) as any;
            userStore.setRole(res.role);
            userStore.setToken(token);
            setUserRoutes(res.role);
            return true;
        } catch {
            removeToken();
            return false;
        }
    } else {
        return false;
    }
}
