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
        <MenuItemVue
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
        class="mobile-menu-box"
        :default-active="$route.path"
        :unique-opened="appStore.settings.uniqueMenueItem as boolean"
    >
        <MenuItemVue
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
import MenuItemVue from "./MenuItem.vue";
import { useAppStore } from "@/store/app";
import { useUserStore } from "@/store/user";

const appStore = useAppStore();
const userStore = useUserStore();
</script>

<style lang="scss">
@use "./const.scss";

// 注意，这里不能scoped，因为菜单收缩且多级的时候，会在body下创建弹出组件
// 此样式需要覆盖到 #app 外的元素

// bddy .el-popper-container-xxx .el-menu中的 el-popper-container-xxx会有1px的白色
// border，不知道如何用选择器去除
.el-menu {
    border: none;
    background-color: const.$mBgColor;
    // #app外的弹窗：el-menu--popup会用一个padding:1;
    padding: 0;
    // 当菜单出现三级的时候，x方向会增宽,menue-item最小值200
    // overflow-x: hidden;
    //菜单打开时的样式
    &.menu-box:not(.el-menu--collapse) {
        width: var(--sider-open-width);
    }

    // 菜单折叠时的样式
    &.menu-box.el-menu--collapse {
        // 折叠时菜单栏的宽度
        width: 56px;

        .el-tooltip__trigger {
            padding: 0 !important;
            // 菜单栏折叠的时候图标的padding-left
            padding-left: const.$iconRight !important;
        }
    }
}
</style>
