<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
// 设置app的宽度
const setHeight = () => {
  const height = window.innerHeight;
  (document.getElementById("app") as HTMLElement).style.height = height + "px";
};
setHeight();

window.addEventListener("resize", setHeight);
</script>

<style>
#app {
  width: 100%;
}
</style>
