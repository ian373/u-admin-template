<template>
  <div class="side-box">
    <LogoVue />
    <el-scrollbar>
      <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
        {{ item }}
      </p>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import LogoVue from "./Logo.vue";
</script>

<style scoped lang="scss">
.side-box {
  height: 100%;
  .el-scrollbar {
    height: calc(100% - 50px); // 减去logovue的高度
  }
}
</style>
