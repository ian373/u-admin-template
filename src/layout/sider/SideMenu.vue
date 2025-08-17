<template>
    <!-- 普通模式下的menu -->
    <el-menu
        v-if="!appStore.isMobile"
        router
        class="menu-box"
        :default-active="$route.path"
        :collapse="appStore.menuCollapse"
        :collapse-transition="true"
        :unique-opened="appStore.settings.uniqueMenueItem as boolean"
        :style="{ '--sider-open-width': appStore.settings.siderWidth + 'px' }"
    >
        <MenuItem
            v-for="route in userStore.routes"
            :is-top="true"
            :show-icon="true"
            :route="route"
            :key="route.path"
            :parent="null"
        />
    </el-menu>
    <!-- mobile模式下的menu -->
    <el-menu
        v-else
        router
        :default-active="$route.path"
        :unique-opened="appStore.settings.uniqueMenueItem as boolean"
    >
        <MenuItem
            v-for="route in userStore.routes"
            :is-top="true"
            :show-icon="true"
            :route="route"
            :key="route.path"
            :parent="null"
        />
    </el-menu>
</template>

<script setup lang="ts">
import MenuItem from "./MenuItem.vue";
import { useAppStore } from "@/store/app";
import { useUserStore } from "@/store/user";

const appStore = useAppStore();
const userStore = useUserStore();
</script>

<style lang="scss">
@use "./const.scss";

// 注意，这里不能scoped，因为菜单收缩且多级的时候，会在body下创建弹出组件
// 此样式需要覆盖到 #app 外的元素

// body .el-popper-container-xxx .el-menu中的 el-popper-container-xxx会有1px的白色
// border，不知道如何用选择器去除，直接border: none;
.el-menu {
    border: none;

    &.menu-box:not(.el-menu--collapse) {
        // 控制打开时菜单栏的宽度, --sider-open-width通过template的:style绑定
        width: var(--sider-open-width);
    }
}
</style>
