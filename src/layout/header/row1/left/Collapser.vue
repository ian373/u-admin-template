<template>
  <div class="box" @click="clickHandle">
    <svg
      class="iconfont"
      :class="appStore.menuCollapse ? '' : 'expand'"
      aria-hidden="true"
    >
      <use xlink:href="#icon-expand1"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store/app";

const appStore = useAppStore();

const clickHandle = () => {
  appStore.toggleMenuCollapse();
};
</script>

<style scoped lang="scss">
@use "../../mixin.scss";

@include mixin.box-style;

.box {
  .iconfont {
    &.expand {
      transform: rotate(180deg);
    }
  }
}
</style>
