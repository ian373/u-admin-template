<template>
  <div class="item">
    <div class="content">
      <slot></slot>
    </div>
    <el-switch v-model="value" active-color="#0960bd" inactive-color="#bbb" />
  </div>
</template>

<script setup lang="ts">
// 组件名使用Switch.vue好像会出现问题...
import { computed } from "vue";

const props = defineProps({
  modelValue: Boolean,
});
const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit("update:modelValue", val);
  },
});
</script>

<style scoped lang="scss">
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
}
</style>
