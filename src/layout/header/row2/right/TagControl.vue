<template>
    <el-dropdown trigger="click">
        <div class="box">
            <MaterialSymbolsKeyboardArrowDownRounded class="icon" />
        </div>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>
                    <div class="item" @click="closeLeftTags">
                        <MaterialSymbolsTextSelectJumpToBeginning class="icon" />
                        <span>关闭左侧标签</span>
                    </div>
                </el-dropdown-item>
                <el-dropdown-item>
                    <div class="item" @click="closeRightTags">
                        <MaterialSymbolsTextSelectJumpToEndRounded class="icon" />
                        <span>关闭右侧标签</span>
                    </div>
                </el-dropdown-item>
                <el-dropdown-item>
                    <div class="item" @click="closeOtherTags">
                        <MaterialSymbolsViewArrayOutline class="icon" />
                        <span>关闭其它标签</span>
                    </div>
                </el-dropdown-item>
                <el-dropdown-item divided>
                    <div class="item" @click="closeAllTags">
                        <MaterialSymbolsDataArrayRounded class="icon" />
                        <span>关闭全部标签</span>
                    </div>
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useTagBoxStore } from "@/store/tagBox";
import router from "@/router";

import MaterialSymbolsKeyboardArrowDownRounded from "~icons/material-symbols/keyboard-arrow-down-rounded";
import MaterialSymbolsTextSelectJumpToBeginning from "~icons/material-symbols/text-select-jump-to-beginning";
import MaterialSymbolsTextSelectJumpToEndRounded from "~icons/material-symbols/text-select-jump-to-end-rounded";
import MaterialSymbolsDataArrayRounded from "~icons/material-symbols/data-array-rounded";
import MaterialSymbolsViewArrayOutline from "~icons/material-symbols/view-array-outline";

const route = useRoute();
const tagBoxStore = useTagBoxStore();

const closeLeftTags = () => {
    tagBoxStore.delLeftTags({
        name: route.meta.title as string,
        path: route.path,
    });
};
const closeRightTags = () => {
    tagBoxStore.delRightTags({
        name: route.meta.title as string,
        path: route.path,
    });
};
const closeAllTags = () => {
    if (route.path !== "/dashboard") {
        router.push("/dashboard");
    }
    tagBoxStore.delAllTags();
};
const closeOtherTags = () => {
    tagBoxStore.delOtherTags({
        name: route.meta.title as string,
        path: route.path,
    });
};
</script>

<style scoped lang="scss">
@use "../../mixin.scss";

.el-dropdown {
    height: 100%;
    @include mixin.box-style-row2;

    .box {
        .icon {
            width: 28px;
            height: 28px;
        }
    }
}

.el-dropdown-menu {
    .item {
        display: flex;
        align-items: center;

        .icon {
            width: 18px;
            height: 18px;
            margin-right: 5px;
        }
    }
}
</style>
