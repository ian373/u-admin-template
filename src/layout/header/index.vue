<template>
  <div>
    <button @click="a">toggle</button>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store/app";

const appStore = useAppStore();
const a = () => {
  appStore.toggleMenuCollapse();
};
</script>

<style scoped lang="scss"></style>
