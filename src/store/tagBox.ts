import { defineStore } from "pinia";

import { TagType } from "@/types/tagBox";

export const useTagBoxStore = defineStore("tagBox", {
  state: () => ({
    // 首页(Dashboard) Tag 为固定tag，不包含在里面，直接写在了组件里
    tagList: [] as TagType[],
  }),
  actions: {
    addTag(view: TagType) {
      if (view.path === "/dashboard") {
        return false;
      }
      if (this.tagList.some((tag) => tag.path === view.path)) {
        return false;
      }
      this.tagList.push(view);
      return true;
    },

    delTag(view: TagType) {
      for (const [i, tag] of this.tagList.entries()) {
        if (tag.path === view.path) {
          this.tagList.splice(i, 1);
          break;
        }
      }
    },
    delLeftTags(view: TagType) {
      if (view.path === "/dashboard") {
        return;
      }
      for (const [i, tag] of this.tagList.entries()) {
        if (tag.path === view.path) {
          if (i === 0) {
            return;
          } else {
            this.tagList.splice(0, i);
            break;
          }
        }
      }
    },
    delRightTags(view: TagType) {
      if (view.path === "/dashboard") {
        this.tagList = [];
        return;
      }
      for (const [i, tag] of this.tagList.entries()) {
        if (tag.path === view.path) {
          if (i === this.tagList.length - 1) {
            return;
          } else {
            // 无法使用state.visitedViews = state.visitedViews.slice()实现，tag标签会渲染异常
            this.tagList.splice(i + 1, this.tagList.length - (i + 1));
            break;
          }
        }
      }
    },
    delOtherTags(view: TagType) {
      if (view.path === "/dashboard") {
        this.tagList = [];
      } else {
        this.tagList = this.tagList.filter((tag) => tag.path === view.path);
      }
    },
    delAllTags() {
      this.tagList = [];
    },
  },
});
