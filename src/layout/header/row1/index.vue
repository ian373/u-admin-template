<template>
  <div class="row1">
    <div class="left">
      <CollapserVue />
      <BreadcrumbVue />
    </div>
  </div>
</template>

<script setup lang="ts">
import CollapserVue from "./left/Collapser.vue";
import BreadcrumbVue from "./left/Breadcrumb.vue";
</script>

<style scoped lang="scss">
.row1 {
  height: 50px; // 和sider的logo高度对齐
  border-bottom: 1px solid #e4e4e4;
  .left {
    display: flex;
    align-items: center;
    height: 100%;
  }
}
</style>
