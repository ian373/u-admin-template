<template>
  <div>
    <button @click="clickHandle">登录</button>
    <button @click="clearToken">清楚token</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

import { useUserStore } from "@/store/user";

const router = useRouter();
const userStore = useUserStore();
const clickHandle = () => {
  userStore.setToken("TOKEN");
  localStorage.setItem("token", "TOKEN");
  router.push("/");
};
const clearToken = () => {
  localStorage.removeItem("token");
};
</script>

<style scoped lang="scss"></style>
