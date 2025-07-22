<template>
    <template v-if="!route.meta?.hidden">
        <!-- 一级菜单 -->
        <el-menu-item
            v-if="isTop && route.children?.length === 1 && !route.children[0].children"
            class="top-menu"
            :index="route.path === '/' ? '/dashboard' : route.path + '/' + route.children[0].path"
        >
            <div>
                <component :is="route.children[0].meta?.icon" class="icon" />
            </div>
            <template #title>
                <div>{{ route.children[0].meta?.title }}</div>
            </template>
        </el-menu-item>
        <!-- 多级菜单的最后一级菜单 -->
        <el-menu-item v-else-if="!route.children" :index="parent + '/' + route.path">
            <template #title>{{ route.meta?.title }}</template>
        </el-menu-item>
        <!-- 多级菜单 -->
        <el-sub-menu
            v-else
            :class="isTop ? 'top-sub-menu' : 'deep-sub-menu'"
            :index="parent ? props.parent + '/' + route.path : route.path"
        >
            <template #title>
                <!-- 只在顶级菜单处才显示图表 -->
                <div v-if="isTop">
                    <component :is="route.meta?.icon" class="icon" />
                </div>
                <span>{{ route.meta?.title }}</span>
            </template>
            <template v-for="r in route.children" :key="r.path">
                <MenuItem
                    :route="r"
                    :show-icon="false"
                    :isTop="false"
                    :parent="parent ? parent + '/' + route.path : route.path"
                ></MenuItem>
            </template>
        </el-sub-menu>
    </template>
</template>

<script setup lang="ts">
import type { RouteRecordRaw } from "vue-router";

const props = defineProps<{
    route: RouteRecordRaw;
    showIcon: boolean;
    isTop: boolean;
    parent: string | null;
}>();
</script>

<style scoped lang="scss">
@use "./const.scss";

.el-menu-item {
    color: const.$mFontColorCommon;
    background-color: const.$mItemBgColor;

    &.top-menu {
        padding-right: 0;
        padding-left: const.$iconRight !important;
        //顶级一级菜单的背景颜色，要和menu的背景颜色一样
        background-color: const.$mBgColor;
    }

    // &.is-active 要在 &.top-menu的后面，同等权重，层叠原理
    &.is-active {
        color: const.$mFontColorActive;
        background-color: const.$mItemBgColorActive;
    }

    &:hover {
        color: const.$mFontColorActive;
    }
}

.el-sub-menu {
    background-color: const.$mItemBgColor;

    &.top-sub-menu {
        background-color: const.$mBgColor;

        > :deep(.el-sub-menu__title) {
            padding-left: const.$iconRight !important;
        }
    }

    > :deep(.el-sub-menu__title) {
        color: const.$mFontColorCommon;

        &:hover {
            background-color: transparent;
            color: const.$mFontColorActive;
        }
    }
}

.icon {
    width: 20px;
    height: 20px;
    margin-right: 15px;
}
</style>
