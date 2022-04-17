<template>
  <div class="scroll-content">
    <div class="ui-control">
      <el-divider>界面设置</el-divider>
      <my-switch-vue v-model="uniqueMenuItem">菜单栏手风琴模式</my-switch-vue>
      <input-number-vue
        v-model="siderWidth"
        :min-num="200"
        :max-num="280"
        :step="5"
        >菜单栏宽度</input-number-vue
      >
      <el-divider>显示设置</el-divider>
      <!-- 多个inputnum或myswitch组件，出现了外边距折叠的问题，但影响不大 -->
      <my-switch-vue v-model="showLogo">Logo</my-switch-vue>
      <my-switch-vue v-model="showBreadcrumb">面包屑</my-switch-vue>
      <my-switch-vue v-model="showTageSection">标签栏</my-switch-vue>
    </div>
    <el-divider></el-divider>
    <el-button type="warning" size="large" @click="resetSettings"
      >重置</el-button
    >
  </div>
  <!-- 占位div -->
  <div style="height: 20px"></div>
</template>

<script setup lang="ts">
import MySwitchVue from "#/appDrawer/MySwitch.vue";
import InputNumberVue from "#/appDrawer/InputNumber.vue";

import { computed, ComputedRef } from "vue";
import { useAppStore } from "@/store/app";

const appStore = useAppStore();

// TODO:属性需要一个个列举，能否简化？
const uniqueMenuItem = computed({
  get: () => appStore.settings.uniqueMenueItem,
  set: (val) => {
    appStore.setSettingsItem("uniqueMenueItem", val);
  },
}) as ComputedRef<boolean>; // TODO:因为有boolean和number两个类型，需要断言，能否优化，不要断言

const siderWidth = computed({
  get: () => appStore.settings.siderWidth,
  set: (val) => {
    appStore.setSettingsItem("siderWidth", val);
  },
}) as ComputedRef<number>;

const showLogo = computed({
  get: () => appStore.settings.showLogo,
  set: (val) => {
    appStore.setSettingsItem("showLogo", val);
  },
}) as ComputedRef<boolean>;
const showBreadcrumb = computed({
  get: () => appStore.settings.showBreadcrumb,
  set: (val) => {
    appStore.setSettingsItem("showBreadcrumb", val);
  },
}) as ComputedRef<boolean>;
const showTageSection = computed({
  get: () => appStore.settings.showTagSection,
  set: (val) => {
    appStore.setSettingsItem("showTagSection", val);
  },
}) as ComputedRef<boolean>;

const resetSettings = () => {
  appStore.resetSettings();
};
</script>

<style scoped lang="scss">
.el-button {
  width: 100%;
}
</style>
