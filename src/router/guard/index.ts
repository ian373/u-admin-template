import { type Router } from "vue-router";

import { createBeforeGuard } from "./beforeGuard";
import { createAfterGuard } from "./afterGuard";

export function setupRouterGuard(router: Router) {
    createBeforeGuard(router);
    createAfterGuard(router);
}
