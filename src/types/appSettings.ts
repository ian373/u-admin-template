export type SettingsKeyType =
    | "uniqueMenueItem"
    | "siderWidth"
    | "showLogo"
    | "showBreadcrumb"
    | "showTagSection";

export interface SettingsType {
    uniqueMenueItem: boolean;
    siderWidth: number;
    showLogo: boolean;
    showBreadcrumb: boolean;
    showTagSection: boolean;
}
