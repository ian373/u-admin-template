import { Router } from "vue-router";

import { createBeforeGuard } from "./beforeGuard";

export function setupRouterGuard(router: Router) {
  createBeforeGuard(router);
}
