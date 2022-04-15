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
.side-box {
  height: 100%;
  .el-scrollbar {
    background-color: white; // 这个需要和sideMenu的颜色一至
    height: calc(100% - 50px); // 减去logovue的高度
  }
}
</style>
