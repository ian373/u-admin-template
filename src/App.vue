<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store/app";

const appStore = useAppStore();
// 判断浏览器视口宽度，低于断点使用mobile模式
const setMobileMode = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth < 992) {
    if (!appStore.isMobile) {
      appStore.toggleMobile();
    }
  } else {
    if (appStore.isMobile) {
      appStore.toggleMobile();
    }
  }
};
setMobileMode();

// 设置app的宽度
const setHeight = () => {
  const height = window.innerHeight;
  (document.getElementById("app") as HTMLElement).style.height = height + "px";
};
setHeight();

window.addEventListener("resize", () => {
  setHeight();
  setMobileMode();
});
</script>

<style>
#app {
  width: 100%;
}
</style>
