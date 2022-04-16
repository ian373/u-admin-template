<template>
  <el-menu
    router
    class="menu-box"
    :default-active="$route.path"
    :collapse="appStore.menuCollapse"
    :collapse-transition="false"
    :unique-opened="appStore.menuUniqueOpen"
  >
    <MenuItemVue :menu-data="userStore.routes" />
  </el-menu>
</template>

<script setup lang="ts">
import MenuItemVue from "./MenuItem.vue";

import { useAppStore } from "@/store/app";
import { useUserStore } from "@/store/user";
const appStore = useAppStore();
const userStore = useUserStore();
</script>

<style lang="scss">
@import "./const.scss";

// 注意，这里不能scoped，因为菜单收缩且多级的时候，会在body下创建弹出组件
// 此样式需要覆盖到 #app 外的元素

.el-menu {
  border: none;
  background-color: $mBgColor;
  // 当菜单出现三级的时候，x方向会增宽,menue-item最小值200
  // overflow-x: hidden;
}
//菜单打开时的样式
.el-menu:not(.el-menu--collapse) {
  width: 200px;
}
// 菜单折叠时的样式
.el-menu.el-menu--collapse {
  width: 56px;
  .el-tooltip__trigger {
    padding: 0;
    padding-left: 0 !important;
    justify-content: center;
  }
}
</style>
