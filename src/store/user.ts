import { defineStore } from "pinia";
import { RouteRecordRaw } from "vue-router";

export const useUserStore = defineStore("user", {
  state: () => ({
    routes: [] as any[],
    role: -1,
    token: "",
  }),
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    setRoutes(routes: RouteRecordRaw[]) {
      this.routes = routes;
    },
    setRole(role: number) {
      this.role = role;
    },
  },
});
