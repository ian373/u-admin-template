<template>
  <div class="box" @click="clickHandle">
    <svg class="iconfont" aria-hidden="true">
      <use xlink:href="#icon-reload"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store/app";

const appStore = useAppStore();

const clickHandle = () => {
  appStore.increaseMainKey();
};
</script>

<style scoped lang="scss">
@use "../../mixin.scss";

@include mixin.box-style-row2;
</style>
