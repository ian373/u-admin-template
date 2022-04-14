import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    routes: [],
    role: -1,
  }),
});
