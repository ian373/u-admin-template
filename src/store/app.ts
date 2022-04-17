import { defineStore } from "pinia";

import { getSettingsItem } from "@/utils/app/settingsItem";
import { SettingsKeyType } from "@/types/appSettings";
import { appSettings } from "@/settings/appSettings";

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
  },
});
