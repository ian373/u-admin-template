<template>
  <el-dropdown trigger="click">
    <div class="box">
      <svg class="iconfont" aria-hidden="true">
        <use xlink:href="#icon-expand-more"></use>
      </svg>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          <div class="item" @click="closeLeftTags">
            <svg class="iconfont" aria-hidden="true">
              <use xlink:href="#icon-a-leftto-line"></use>
            </svg>
            <span>关闭左侧标签</span>
          </div>
        </el-dropdown-item>
        <el-dropdown-item>
          <div class="item" @click="closeRightTags">
            <svg
              class="iconfont"
              style="transform: rotate(180deg)"
              aria-hidden="true"
            >
              <use xlink:href="#icon-a-leftto-line"></use>
            </svg>
            <span>关闭右侧标签</span>
          </div>
        </el-dropdown-item>
        <el-dropdown-item>
          <div class="item" @click="closeOtherTags">
            <svg class="iconfont" aria-hidden="true">
              <use xlink:href="#icon-house"></use>
            </svg>
            <span>关闭其它标签</span>
          </div>
        </el-dropdown-item>
        <el-dropdown-item divided>
          <div class="item" @click="closeAllTags">
            <svg class="iconfont" aria-hidden="true">
              <use xlink:href="#icon-minus-bold"></use>
            </svg>
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
    .iconfont {
      width: 28px;
      height: 28px;
    }
  }
}
.el-dropdown-menu {
  .item {
    display: flex;
    align-items: center;
    .iconfont {
      width: 18px;
      height: 18px;
      margin-right: 5px;
    }
  }
}
</style>
