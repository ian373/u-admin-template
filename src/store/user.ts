import { defineStore } from "pinia";
import type { RouteRecordRaw } from "vue-router";
import type { Role } from "@/types/routes.ts";

export const useUserStore = defineStore("user", {
    state: () => ({
        routes: [] as RouteRecordRaw[],
        role: null as Role | null,
        token: null as string | null,
    }),
});
