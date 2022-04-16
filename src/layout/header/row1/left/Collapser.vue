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
@import "../../const.scss";

.box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: $hoverBgColor;
  }
  .iconfont {
    width: 20px;
    height: 20px;
    &.expand {
      transform: rotate(180deg);
    }
  }
}
</style>
