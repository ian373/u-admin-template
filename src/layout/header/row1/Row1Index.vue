<template>
    <div class="row1">
        <div class="left">
            <LeftCollapserVue />
            <LeftBreadcrumbVue v-if="appStore.settings.showBreadcrumb && !appStore.isMobile" />
        </div>
        <div class="right">
            <RightNoticeVue />
            <FullScreenVue />
            <RightUserVue />
            <RightSettingsVue />
        </div>
    </div>
</template>

<script setup lang="ts">
import LeftCollapserVue from "./left/LeftCollapser.vue";
import LeftBreadcrumbVue from "./left/LeftBreadcrumb.vue";
import RightUserVue from "./right/RightUser.vue";
import FullScreenVue from "./right/FullScreen.vue";
import RightNoticeVue from "./right/RightNotice.vue";

import RightSettingsVue from "./right/RightSettings.vue";

import { useAppStore } from "@/store/app";
const appStore = useAppStore();
</script>

<style scoped lang="scss">
.row1 {
    display: flex;
    justify-content: space-between;
    height: 50px; // 和sider的logo高度对齐
    border-bottom: 1px solid #e4e4e4;
    .left,
    .right {
        display: flex;
        align-items: center;
        height: 100%;
    }
    .right {
        justify-content: end;
    }
}
</style>
