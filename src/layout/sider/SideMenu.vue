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

<style scoped lang="scss">
.el-menu {
  border: none;

  // 当菜单出现三级的时候，x方向会增宽,menue-item最小值200
  // overflow-x: hidden;
}
</style>
