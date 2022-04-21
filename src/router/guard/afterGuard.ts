import { Router } from "vue-router";

import { useAppStore } from "@/store/app";

export function createAfterGuard(router: Router) {
  router.afterEach((_to, _from) => {
    const appStore = useAppStore();

    if (appStore.mainLoading) {
      appStore.toggleMainLoading();
    }
  });
}
