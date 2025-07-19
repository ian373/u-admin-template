<template>
    <div class="box" @click="clickHandle">
        <MaterialSymbolsSettingsOutline class="icon" />
    </div>
    <!-- 通过size属性设置el-drawer的宽度 -->
    <el-drawer class="my-drawer" v-model="drawer" title="应用配置" :size="330">
        <template #header>
            <div class="title">应用配置</div>
        </template>
        <el-scrollbar>
            <settings-drawer-vue />
        </el-scrollbar>
    </el-drawer>
</template>

<script setup lang="ts">
import SettingsDrawerVue from "./SettingsDrawer.vue";
import MaterialSymbolsSettingsOutline from "~icons/material-symbols/settings-outline";

import { ref } from "vue";

const drawer = ref(false);

const clickHandle = () => {
    drawer.value = !drawer.value;
};
</script>

<style scoped lang="scss">
@use "../../mixin.scss";

@include mixin.box-style;

.el-scrollbar {
    height: 100%;
    padding: 0 20px;
}
</style>

<style lang="scss">
.my-drawer {
    .el-drawer__header {
        margin: 0;
        padding: 20px;
        border: 1px solid #f0f0f0;
    }

    .title {
        color: #262626;
    }

    .el-drawer__body {
        padding: 0;
    }
}
</style>
