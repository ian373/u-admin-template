<template>
    <div class="side-box">
        <AppLogo v-if="appStore.settings.showLogo" />
        <el-scrollbar :class="appStore.settings.showLogo ? '' : 'hidden-logo'">
            <SideMenu />
        </el-scrollbar>
    </div>
</template>

<script setup lang="ts">
import AppLogo from "./AppLogo.vue";
import SideMenu from "./SideMenu.vue";
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
