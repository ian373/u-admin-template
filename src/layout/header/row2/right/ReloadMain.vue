<template>
    <div class="box" @click="clickHandle">
        <MaterialSymbolsAutorenew class="icon" />
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store/app";
import { useRoute } from "vue-router";
import MaterialSymbolsAutorenew from "~icons/material-symbols/autorenew";

const appStore = useAppStore();
const route = useRoute();
const clickHandle = () => {
    if (route.meta.cache) {
        appStore.increaseMainKP();
    } else {
        appStore.increaseMainKey();
    }
};
</script>

<style scoped lang="scss">
@use "../../mixin.scss";

@include mixin.box-style-row2;
</style>
