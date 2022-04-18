<template>
  <div class="row2">
    <div class="left">
      <TagSectionVue />
    </div>
  </div>
</template>

<script setup lang="ts">
import TagSectionVue from "./left/TagSection.vue";
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
    width: 70%; //TODO: 宽度：100% - div.right的宽度 - 滚动条margin-left
  }
  .right {
    justify-content: end;
  }
}
</style>
