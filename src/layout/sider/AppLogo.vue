<template>
    <div class="logo-box" @click="goHome">
        <img src="@/assets/logo.png" alt="" />
        <span>UAdminTemp</span>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const goHome = () => {
    if (router.currentRoute.value.path !== "/dashboard") {
        router.push("/dashboard");
    }
};
</script>

<style scoped lang="scss">
@use "./const.scss";
.logo-box {
    position: relative;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: const.$mBgColor;
    cursor: pointer;
    overflow: hidden;
    padding-left: var(--el-menu-base-level-padding);

    img {
        width: 24px;
        height: 24px;
        margin-right: 16px;
    }

    span {
        position: absolute;
        left: 64px;
        color: #fff;
        font-size: 16px;
        font-weight: 700;
    }
}
</style>
