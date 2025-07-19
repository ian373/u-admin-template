<template>
    <el-dropdown>
        <div class="avatar">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <div class="user-name">UAdmin@uua</div>
        </div>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="goProject">
                    <div class="item">
                        <MaterialSymbolsLabProfileOutline class="icon" />
                        <span>项目地址</span>
                    </div>
                </el-dropdown-item>
                <el-dropdown-item divided>
                    <div class="item">
                        <MaterialSymbolsLockOutline class="icon" />
                        <span>锁定页面</span>
                    </div>
                </el-dropdown-item>
                <el-dropdown-item @click="logout">
                    <div class="item">
                        <MaterialSymbolsLogoutRounded class="icon" />
                        <span>登出</span>
                    </div>
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup lang="ts">
import MaterialSymbolsLabProfileOutline from "~icons/material-symbols/lab-profile-outline";
import MaterialSymbolsLockOutline from "~icons/material-symbols/lock-outline";
import MaterialSymbolsLogoutRounded from "~icons/material-symbols/logout-rounded";

const goProject = () => {
    window.open("https://gitee.com/ian171/u-admin-template");
};

const logout = () => {
    if (confirm("是否登出？")) {
        localStorage.removeItem("UAdminToken");
        location.reload();
    }
};
</script>

<style scoped lang="scss">
@use "../../const.scss";

.el-dropdown {
    // 长度auto，更具user-name长度变化
    height: 100%;

    .avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 10px;
        height: 100%;
        cursor: pointer;

        &:hover {
            background-color: const.$hoverBgColor;
        }

        .el-avatar {
            width: 30px;
            height: 30px;
        }

        .user-name {
            margin-left: 10px;
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
