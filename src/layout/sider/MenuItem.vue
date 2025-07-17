<template>
    <template v-for="item of props.menuData">
        <template v-if="!item.hidden">
            <!-- 一级菜单,只会在第一次生效(offset=undefined) -->
            <el-menu-item
                v-if="
                    !props.offset &&
                    item.children &&
                    item.children.length === 1 &&
                    !item.children[0].children
                "
                :class="props.offset ? '' : 'top-menu'"
                :key="item.path"
                :index="item.path === '/' ? '/dashboard' : item.path + '/' + item.children[0].path"
            >
                <div>
                    <svg class="iconfont" aria-hidden="true">
                        <use :xlink:href="item.children[0].meta.icon"></use>
                    </svg>
                </div>
                <template #title>
                    <div>{{ item.children[0].meta.title }}</div>
                </template>
            </el-menu-item>
            <!-- 多级菜单的最后一级菜单 -->
            <el-menu-item
                v-if="!item.children"
                :key="item.path"
                :index="props.parent ? props.parent + '/' + item.path : item.path"
            >
                <template #title>{{ item.meta.title }}</template>
            </el-menu-item>
            <!-- 多级菜单 -->
            <el-sub-menu
                v-if="isSubmenu(item, props.offset)"
                :class="props.offset ? 'deep-sub-menu' : 'top-sub-menu'"
                :key="item.path"
                :index="props.parent ? props.parent + '/' + item.path : item.path"
            >
                <template #title>
                    <!-- 只在顶级菜单处才显示图表 -->
                    <div>
                        <!-- svg图标要用div包裹，否则菜单栏折叠动画会出现跳动 -->
                        <svg v-if="props.shhowIcon" class="iconfont" aria-hidden="true">
                            <use :xlink:href="item.meta.icon"></use>
                        </svg>
                    </div>
                    <span>{{ item.meta.title }}</span>
                </template>
                <MenuItem
                    :shhow-icon="false"
                    :offset="-1"
                    :menu-data="item.children"
                    :parent="props.parent ? props.parent + '/' + item.path : item.path"
                ></MenuItem>
            </el-sub-menu>
        </template>
    </template>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
    shhowIcon: {
        type: Boolean,
        default: true,
    },
    offset: Number, // Boolean(0)为false，其它数字为true
    menuData: Object as PropType<any[]>,
    parent: String,
});

// offset=> undfined | -1
const isSubmenu = (item: any, offset: any) => {
    if (!offset) {
        if (item.children && item.children.length > 1) return true;
        // 解决路由为s1-s2-s3-s4这种边际情况
        if (item.children && item.children.length === 1 && item.children[0].children) return true;
    } else {
        if (item.children && item.children.length > 0) return true;
    }
    return false;
};
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

.iconfont {
    width: 20px;
    height: 20px;
    margin-right: 15px;
}
</style>
