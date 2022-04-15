import { defineStore } from "pinia";

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
    setRoutes(routes: any[]) {
      this.routes = routes;
    },
    setRole(role: number) {
      this.role = role;
    },
  },
});
