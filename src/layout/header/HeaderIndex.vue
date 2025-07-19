<template>
    <Row1IndexVue v-show="!appStore.expandMain" />
    <Row2IndexVue />
</template>

<script setup lang="ts">
import Row1IndexVue from "./row1/Row1Index.vue";
import Row2IndexVue from "./row2/Row2Index.vue";

import { useAppStore } from "@/store/app";

const appStore = useAppStore();
</script>

<style scoped lang="scss"></style>
