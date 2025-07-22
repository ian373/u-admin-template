import type { Router } from "vue-router";

import { useAppStore } from "@/store/app";

export function createAfterGuard(router: Router) {
    router.afterEach(() => {
        const appStore = useAppStore();

        if (appStore.mainLoading) {
            appStore.toggleMainLoading();
        }
    });
}
