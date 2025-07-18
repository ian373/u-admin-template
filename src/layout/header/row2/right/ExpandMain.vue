<template>
    <div class="box" @click="appStore.toggleExpandMain">
        <MaterialSymbolsCloseFullscreen v-if="appStore.expandMain" class="icon" />
        <MaterialSymbolsOpenInFull v-else class="icon" />
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store/app";
import MaterialSymbolsOpenInFull from "~icons/material-symbols/open-in-full";
import MaterialSymbolsCloseFullscreen from "~icons/material-symbols/close-fullscreen";

const appStore = useAppStore();
</script>

<style scoped lang="scss">
@use "../../mixin.scss";

@include mixin.box-style-row2;
</style>
