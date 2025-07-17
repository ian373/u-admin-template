<template>
    <el-drawer
        ref="drawerRef"
        class="my-drawer"
        direction="ltr"
        v-model="showMenu"
        title="菜单栏"
        :with-header="false"
        :size="appStore.settings.siderWidth as number"
    >
        <SiderVue />
    </el-drawer>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";

import SiderVue from "../index.vue";

import { useAppStore } from "@/store/app";

// 获取el-drawer的示例，后面需要调用el-drawer的handleClose方法
const drawerRef = ref(null);

const appStore = useAppStore();
const showMenu = computed({
    get: () => !appStore.menuCollapse,
    set: () => {
        appStore.toggleMenuCollapse();
    },
});

const route = useRoute();
watch(
    () => route.path,
    () => {
        // @ts-ignore
        drawerRef.value.handleClose();
        // 用于关闭 Drawer, 该方法会调用传入的 before-close 方法(为空)
    },
);
</script>
