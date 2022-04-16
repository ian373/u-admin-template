<template>
  <el-container class="layout-box">
    <el-aside><SiderVue /></el-aside>
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
