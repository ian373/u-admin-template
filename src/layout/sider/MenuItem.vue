<template>
  <template v-for="item of props.menuData">
    <template v-if="!item.hidden">
      <!-- 一级菜单,只会在第一次生效(offset=undefined) -->
      <el-menu-item
        v-if="!props.offset && item.children && item.children.length === 1"
        :class="props.offset ? '' : 'top-menu'"
        :key="item.path"
        :index="
          item.path === '/'
            ? '/dashboard'
            : item.path + '/' + item.children[0].path
        "
      >
        <svg class="iconfont" aria-hidden="true">
          <use :xlink:href="item.children[0].meta.icon"></use>
        </svg>
        <template #title>{{ item.children[0].meta.title }}</template>
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
        v-if="
          item.children &&
          item.children.length > 1 + (props.offset ? props.offset : 0)
        "
        :class="props.offset ? 'deep-sub-menu' : 'top-sub-menu'"
        :key="item.path"
        :index="props.parent ? props.parent + '/' + item.path : item.path"
      >
        <template #title>
          <!-- 只在顶级菜单处才显示图表 -->
          <svg v-if="props.shhowIcon" class="iconfont" aria-hidden="true">
            <use :xlink:href="item.meta.icon"></use>
          </svg>
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
import { PropType } from "vue";
const props = defineProps({
  shhowIcon: {
    type: Boolean,
    default: true,
  },
  offset: Number, // Boolean(0)为false，其它数字为true
  menuData: Object as PropType<any[]>,
  parent: String,
});
</script>

<style scoped lang="scss">
.el-menu-item.top-menu {
  padding-left: 8px !important;
  //顶级一级菜单的背景颜色，要和menu的背景颜色一样
  background-color: #001529;
}
:deep(.deep-sub-menu) {
  //嵌套的sub-menu的背景颜色要和el-menu-item一样
  background-color: #0c2135;
}
.el-sub-menu {
  :deep(.el-sub-menu__title) {
    color: #b6bcc2;
    &:hover {
      background-color: transparent;
      color: #fff;
    }
  }
}
.top-sub-menu {
  > :deep(.el-sub-menu__title) {
    padding-left: 8px !important;
  }
}
.el-menu-item {
  color: #b6bcc2;
  background-color: #0c2135;
  &.is-active {
    color: #fff;
    background-color: #0960bd;
  }
  &:hover {
    color: #fff;
  }
}
.iconfont {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
</style>
