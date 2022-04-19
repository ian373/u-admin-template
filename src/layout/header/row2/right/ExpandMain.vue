<template>
  <div class="box" @click="appStore.toogleExpandMain">
    <svg class="iconfont" aria-hidden="true">
      <use
        :xlink:href="
          appStore.expandMain ? '#icon-full-screen-off' : '#icon-full-screen'
        "
      ></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store/app";

const appStore = useAppStore();
</script>

<style scoped lang="scss">
@use "../../mixin.scss";

@include mixin.box-style-row2;
</style>
