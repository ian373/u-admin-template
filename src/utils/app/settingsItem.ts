import { appSettings } from "@/settings/appSettings";
import type { SettingsKeyType } from "@/types/appSettings";

export function getSettingsItem(key: SettingsKeyType, keyType: "bool" | "num") {
    const value = localStorage.getItem("settings-" + key);
    if (value) {
        if (keyType === "num") {
            const result = parseInt(value, 10);
            if (Number.isNaN(result)) {
                localStorage.setItem("settings-" + key, String(appSettings[key]));
                return appSettings[key];
            } else {
                return result;
            }
        } else {
            // keyType=bool
            if (value === "true") {
                return true;
            } else if (value === "false") {
                return false;
            } else {
                localStorage.setItem("settings-" + key, String(appSettings[key]));
                return appSettings[key];
            }
        }
    } else {
        localStorage.setItem("settings-" + key, String(appSettings[key]));
        return appSettings[key];
    }
}
