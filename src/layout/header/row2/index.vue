<template>
  <div class="row2">
    <div class="left">
      <TagSectionVue v-if="appStore.settings.showTagSection" />
    </div>
    <div class="right">
      <ReloadMainVue />
      <TagControlVue />
      <ExpandMainVue />
    </div>
  </div>
</template>

<script setup lang="ts">
import TagSectionVue from "./left/TagSection.vue";
import TagControlVue from "./right/TagControl.vue";
import ExpandMainVue from "./right/ExpandMain.vue";
import ReloadMainVue from "./right/ReloadMain.vue";

import { useAppStore } from "@/store/app";

const appStore = useAppStore();
</script>

<style scoped lang="scss">
.row2 {
  display: flex;
  justify-content: space-between;
  height: 34px;
  border-bottom: 1px solid #e4e4e4;
  .left,
  .right {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .left {
    //宽度：100% - div.right的宽度
    width: calc(100% - 122px);
  }
  .right {
    justify-content: end;
  }
}
</style>
