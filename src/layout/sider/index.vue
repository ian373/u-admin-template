<template>
  <div class="side-box">
    <LogoVue />
    <el-scrollbar>
      <SideMenuVue />
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import LogoVue from "./Logo.vue";
import SideMenuVue from "./SideMenu.vue";
</script>

<style scoped lang="scss">
@use "./const.scss";
.side-box {
  height: 100%;
  background-color: const.$mBgColor;
  .el-scrollbar {
    height: calc(100% - 50px); // 减去logovue的高度
  }
}
</style>
