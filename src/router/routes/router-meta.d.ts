import "vue-router";
import type { Component } from "vue";
import type { Role } from "@/types/routes.ts";

// To ensure it is treated as a module, add at least one `export` statement
export {};

declare module "vue-router" {
    interface RouteMeta {
        title: string;
        icon?: Component;
        roles?: Role[];
        cache?: boolean;
        hidden?: boolean;
    }
}
