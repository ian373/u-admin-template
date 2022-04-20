import { defineStore } from "pinia";

import { getSettingsItem } from "@/utils/app/settingsItem";
import { SettingsKeyType } from "@/types/appSettings";
import { appSettings } from "@/settings/appSettings";

export const useAppStore = defineStore("app", {
  state: () => ({
    menuCollapse: false,
    menuUniqueOpen: true,
    // 需要刷新router-view的时候，改变mainReloadKey
    mainReloadKey: 0,
    // mainLoading: true,
    // visitedPaths: [],
    expandMain: false,
    // 当浏览器视口宽度小于一定值时，使用mobile模式
    isMobile: false,
    // mobileSiderOpen: false,
    // App settings  type: SettingsType  能否指定this.settings的类型？
    settings: {
      uniqueMenueItem: getSettingsItem("uniqueMenueItem", "bool"),
      siderWidth: getSettingsItem("siderWidth", "num"),
      showLogo: getSettingsItem("showLogo", "bool"),
      showBreadcrumb: getSettingsItem("showBreadcrumb", "bool"),
      showTagSection: getSettingsItem("showTagSection", "bool"),
    },
  }),
  actions: {
    toggleMenuCollapse() {
      this.menuCollapse = !this.menuCollapse;
    },
    increaseMainKey() {
      this.mainReloadKey++;
    },
    setSettingsItem(key: SettingsKeyType, val: boolean | number) {
      this.settings[key] = val;
      localStorage.setItem("settings-" + key, String(val));
    },
    // 类型声明如何优化？
    resetSettings() {
      for (let key in appSettings) {
        this.settings[key as SettingsKeyType] =
          appSettings[key as SettingsKeyType];
        localStorage.setItem(
          "settings-" + key,
          String(appSettings[key as SettingsKeyType])
        );
      }
    },
    toggleExpandMain() {
      this.expandMain = !this.expandMain;
    },
    toggleMobile() {
      this.isMobile = !this.isMobile;
    },
  },
});
