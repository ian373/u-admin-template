<template>
  <div class="item">
    <div class="content">
      <slot></slot>
    </div>
    <el-input-number
      v-model="value"
      :min="minNum"
      :max="maxNum"
      :step-strictly="true"
      :step="step"
      size="small"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
// 可以不适用props.minNum，在模板中可以直接使用minNum(props的属性)
const props = defineProps({
  modelValue: Number,
  minNum: Number,
  maxNum: Number,
  step: Number,
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
