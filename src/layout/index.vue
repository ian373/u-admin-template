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
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
// 使用elment-plus官方两个插件后，自动注册组件，不需要手动导入，也不需要在main.ts中注册
import SiderVue from "./sider/index.vue";
import HeaderVue from "./header/index.vue";
import MobileSiderVue from "./sider/mobile/index.vue";

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
      background-color: lightgray;
    }
  }
}
</style>
