import type { Router } from "vue-router";

import { useAppStore } from "@/store/app";

export function createAfterGuard(router: Router) {
    router.afterEach(() => {
        const appStore = useAppStore();

        if (appStore.isMainLoading) {
            appStore.toggleMainLoading();
        }
    });
}
