<template>
    <el-container class="layout-box">
        <template v-if="!appStore.isMobile">
            <el-aside v-show="!appStore.expandMain">
                <SiderIndex />
            </el-aside>
        </template>
        <MobileIndexSider v-else />
        <el-container>
            <el-header>
                <HeaderIndex />
            </el-header>
            <el-main v-loading="appStore.isMainLoading">
                <RouterViewComp />
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
// 使用自动导入插件后，直接在template中用，不用导入也不用在main.ts中注册
import SiderIndex from "./sider/SiderIndex.vue";
import HeaderIndex from "./header/HeaderIndex.vue";
import MobileIndexSider from "./sider/mobile/MobileIndex.vue";
import RouterViewComp from "@/components/layout/RouterViewComp.vue";

import { useAppStore } from "@/store/app";

const appStore = useAppStore();
</script>

<style scoped lang="scss">
.layout-box {
    height: 100%;

    .el-aside {
        width: auto;
    }

    .el-container {
        .el-header {
            padding: 0;
            height: auto;
        }

        .el-main {
            position: relative;
            background-color: #f0f2f5;
            padding: 0;
            // 路由切换动画水平方向会撑大el-main
            overflow-x: hidden;
        }
    }
}
</style>
