<template>
  <div class="row1">
    <div class="left">
      <CollapserVue />
      <BreadcrumbVue />
    </div>
    <div class="right">
      <UserVue />
      <SettingsVue />
    </div>
  </div>
</template>

<script setup lang="ts">
import CollapserVue from "./left/Collapser.vue";
import BreadcrumbVue from "./left/Breadcrumb.vue";
import UserVue from "./right/User.vue";

import SettingsVue from "./right/Settings.vue";
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
