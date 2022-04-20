<template>
  <Row1Vue v-show="!appStore.expandMain" />
  <Row2Vue />
</template>

<script setup lang="ts">
import Row1Vue from "./row1/index.vue";
import Row2Vue from "./row2/index.vue";

import { useAppStore } from "@/store/app";

const appStore = useAppStore();
</script>

<style scoped lang="scss"></style>
