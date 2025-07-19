<template>
    <div class="side-box">
        <AppLogoVue v-if="appStore.settings.showLogo" />
        <el-scrollbar :class="appStore.settings.showLogo ? '' : 'hidden-logo'">
            <SideMenuVue />
        </el-scrollbar>
    </div>
</template>

<script setup lang="ts">
import AppLogoVue from "./AppLogo.vue";
import SideMenuVue from "./SideMenu.vue";

import { useAppStore } from "@/store/app";

const appStore = useAppStore();
</script>

<style scoped lang="scss">
@use "./const.scss";
.side-box {
    height: 100%;
    background-color: const.$mBgColor;
    .el-scrollbar {
        height: calc(100% - 50px); // 减去logovue的高度
        &.hidden-logo {
            height: 100%;
        }
    }
}
</style>
