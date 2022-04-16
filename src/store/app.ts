import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    menuCollapse: false,
    menuUniqueOpen: true,
    // mainKey: 0,
    // mainLoading: true,
    // visitedPaths: [],
    // mainFullScreen: false,
    // // mobile
    // isMobile: false,
    // mobileSiderOpen: false,
    // // App settings
    // uniqueMenueItem: getSettingsItem("uniqueMenueItem", "bool"),
    // siderWidth: getSettingsItem("siderWidth", "num"),
    // showLogo: getSettingsItem("showLogo", "bool"),
    // showBreadcrumb: getSettingsItem("showBreadcrumb", "bool"),
    // showTagSection: getSettingsItem("showTagSection", "bool"),
  }),
  actions: {
    toggleMenuCollapse() {
      this.menuCollapse = !this.menuCollapse;
    },
  },
});
