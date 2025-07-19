<template>
    <div class="box" @click="clickHandle">
        <MaterialSymbolsMenuOpenRounded
            class="icon"
            :class="appStore.menuCollapse ? 'expand' : ''"
        />
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store/app";
import MaterialSymbolsMenuOpenRounded from "~icons/material-symbols/menu-open-rounded";

const appStore = useAppStore();

const clickHandle = () => {
    appStore.toggleMenuCollapse();
};
</script>

<style scoped lang="scss">
@use "../../mixin.scss";

@include mixin.box-style;

.box {
    .icon {
        &.expand {
            transform: rotate(180deg);
        }
    }
}
</style>
