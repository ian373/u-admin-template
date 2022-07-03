<template>
  <el-container class="layout-box">
    <template v-if="!appStore.isMobile">
      <el-aside v-show="!appStore.expandMain">
        <SiderVue />
      </el-aside>
    </template>
    <MobileSiderVue v-else />
    <el-container>
      <el-header><HeaderVue /></el-header>
      <el-main v-loading="appStore.mainLoading">
        <RouterViewCompVue />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
// 使用自动导入插件后，直接在template中用，不用导入也不用在main.ts中注册
import SiderVue from "./sider/index.vue";
import HeaderVue from "./header/index.vue";
import MobileSiderVue from "./sider/mobile/index.vue";

import RouterViewCompVue from "@/components/layout/RouterViewComp.vue";

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
      overflow: hidden;
    }
  }
}
</style>
