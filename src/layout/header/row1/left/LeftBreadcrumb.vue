<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item of breadcrumbList" :key="item.path">
            <el-dropdown v-if="item.haveSiblings">
                <span class="el-dropdown-link">
                    {{ item.title }}
                    <span>
                        <MaterialSymbolsKeyboardArrowDownRounded class="icon" />
                    </span>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item
                            v-for="_item of item.siblings"
                            :key="'dropdown' + _item.path"
                            @click="dropdownHandle(_item.path)"
                            >{{ _item.title }}
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <div class="item-title" v-else>{{ item.title }}</div>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang="ts">
import { type RouteRecordRaw, useRoute, useRouter } from "vue-router";
import { computed, ref, watch, type Ref } from "vue";
import { useUserStore } from "@/store/user";

import MaterialSymbolsKeyboardArrowDownRounded from "~icons/material-symbols/keyboard-arrow-down-rounded";

const route = useRoute();
const router = useRouter();
const currentPath = computed(() => route.path);

const userStore = useUserStore();

type ParseRoutesType = { path: string; title?: string; children?: ParseRoutesType[] };
type BreadCrumbType = {
    path: string;
    title: string;
    haveSiblings: boolean;
    siblings?: ParseRoutesType[];
};

const breadcrumbList = ref([]) as Ref<BreadCrumbType[]>;

function parseRoutes(routeList: RouteRecordRaw[], parentPath: null | string) {
    const pathList = [];

    for (const route of routeList) {
        if (route.meta?.hidden) continue;
        const obj = {} as ParseRoutesType;
        if (parentPath) {
            if (parentPath === "/") {
                obj.path = parentPath + route.path;
            } else {
                obj.path = parentPath + "/" + route.path;
            }
        } else {
            obj.path = route.path;
        }
        if (route.meta && route.meta.title) obj.title = route.meta.title as string;
        if (route.children) {
            obj.children = parseRoutes(route.children, obj.path);
        }
        pathList.push(obj);
    }
    return pathList;
}

// console.log(parseRoutes(userStore.routes, null));
// 返回pathList中最后一个路径的兄弟路径对象
function getSiblingRoutes(pathList: string[], list: ParseRoutesType[]) {
    const getCh = (path: string, objList: ParseRoutesType[]) => {
        let obj;
        objList.forEach((item) => {
            if (item.path === path) {
                obj = item;
                return;
            }
        });
        return obj as unknown as ParseRoutesType;
    };
    let target;
    let curList = list;
    for (const p of pathList.slice(0, -1)) {
        target = getCh(p, curList);
        curList = target.children || [];
    }
    // console.log(curList);
    return curList;
}

const routePathList = parseRoutes(userStore.routes, null);
// matched顺序：父路-->由外到内-->当前路由
const setBreadcrumb = () => {
    const list = [] as BreadCrumbType[];

    const pathList = route.matched.map((item) => item.path);

    route.matched.forEach((item, idx) => {
        if (idx === 0) {
            // 通过判断是否有item.meta.title来判断是否要添加入list
            // 对路由编写格式要求限定大
            if (item.meta.title)
                list.push({
                    path: item.path,
                    haveSiblings: false,
                    title: item.meta.title as string,
                });
        }
        if (item.meta.title && idx > 0) {
            const siblings = getSiblingRoutes(pathList.slice(0, idx + 1), routePathList);
            const obj: BreadCrumbType = {
                path: item.path,
                title: item.meta.title as string,
                haveSiblings: siblings.length > 1,
            };
            if (siblings.length > 1) {
                obj.siblings = siblings;
            }
            list.push(obj);
        }
    });
    // console.log(list);
    breadcrumbList.value = list;
};
setBreadcrumb();
watch(currentPath, setBreadcrumb);

const dropdownHandle = (path: string) => {
    if (router.currentRoute.value.path !== path) {
        router.push(path);
    }
};
</script>

<style scoped lang="scss">
.el-breadcrumb {
    height: 100%;
    margin-left: 8px;

    > :deep(.el-breadcrumb__item) {
        height: 100%;
    }

    .item-title {
        height: 20px;
        line-height: 20px;
    }

    .el-dropdown-link {
        height: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    .icon {
        width: 20px;
        height: 20px;
        color: #8c8c8c;
    }
}
</style>
