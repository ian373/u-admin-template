import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    routes: [],
    role: -1,
    token: "",
  }),
  actions: {
    setToken(token: string) {
      this.token = token;
    },
  },
});
