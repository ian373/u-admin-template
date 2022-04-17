<template>
  <div class="box" @click="clickHandle">
    <svg class="iconfont" aria-hidden="true">
      <use xlink:href="#icon-setting"></use>
    </svg>
  </div>
  <el-drawer
    custom-class="my-drawer"
    v-model="drawer"
    title="应用配置"
    :size="330"
  >
    <template v-slot:title>
      <div class="title">应用配置</div>
    </template>
    <el-scrollbar>
      <settings-drawer-vue />
    </el-scrollbar>
  </el-drawer>
</template>

<script setup lang="ts">
import SettingsDrawerVue from "./SettingsDrawer.vue";

import { ref } from "vue";

const drawer = ref(false);

const clickHandle = () => {
  drawer.value = !drawer.value;
};
</script>

<style scoped lang="scss">
@import "../../const.scss";

.box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: $hoverBgColor;
  }
  .iconfont {
    width: 20px;
    height: 20px;
  }
}
.el-scrollbar {
  height: 100%;
  padding: 0 20px;
}
</style>

<style lang="scss">
.my-drawer {
  .el-drawer__header {
    margin: 0;
    padding: 20px;
    border: 1px solid #f0f0f0;
  }
  .title {
    color: #262626;
  }
  .el-drawer__body {
    padding: 0;
  }
}
</style>
