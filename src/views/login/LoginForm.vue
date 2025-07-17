<template>
    <h1>登录</h1>
    <el-form ref="loginFormRef" :model="loginData" status-icon :rules="rules">
        <el-form-item prop="userName">
            <el-input
                v-model="loginData.userName"
                placeholder="请输入用户名..."
                clearable
                autocomplete="off"
            />
        </el-form-item>
        <el-form-item prop="pwd">
            <el-input
                v-model="loginData.pwd"
                type="password"
                placeholder="请输入密码..."
                show-password
                clearable
                autocomplete="off"
            />
        </el-form-item>
        <el-form-item class="option">
            <el-checkbox v-model="loginData.rememberMe" label="记住我" />
            <span class="forget">忘记密码</span>
        </el-form-item>
        <el-form-item>
            <el-button class="login-btn" type="primary" @click="login(loginFormRef)"
                >登录</el-button
            >
        </el-form-item>
    </el-form>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

import type { FormRules, FormInstance } from "element-plus";
import "element-plus/es/components/message/style/css";
import { ElMessage } from "element-plus";

import { useRouter } from "vue-router";

import { useUserStore } from "@/store/user";
import { setUserRoutes } from "@/utils/routes/permission";

import { request } from "@/utils/request";
import { UserApi } from "@/api/user";
import { setToken } from "@/utils/user";

const loginFormRef = ref<FormInstance>();

const loginData = reactive({
    userName: "UAdminTemp",
    pwd: "12345678",
    rememberMe: false,
});

// 校验规则
const rules = reactive<FormRules>({
    userName: [
        {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
        },
        {
            min: 6,
            max: 12,
            message: "用户名不符合要求",
            trigger: "blur",
        },
    ],
    pwd: [
        {
            required: true,
            message: "请输入密码",
            trigger: "blur",
        },
        {
            min: 8,
            max: 16,
            message: "密码不符合要求",
            trigger: "blur",
        },
    ],
});

const userStore = useUserStore();
const router = useRouter();

const login = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.validate((valid) => {
        if (valid) {
            // ===============no-request: on================
            if (import.meta.env.VITE_NO_REQUEST === "on") {
                console.log("NO_REQUEST: ON");
                const token = "UAdminTempToken";
                userStore.setToken(token);
                setToken(token);
                userStore.setRole(0);
                setUserRoutes(0);
                ElMessage({
                    showClose: true,
                    message: "登录成功！",
                    type: "success",
                });
                router.push("/dashboard");
            } // =======================================
            else {
                // console.log(request.defaults.headers);  (A)

                // 发送用户名和密码，获取token和role
                request
                    .post(UserApi.login, {
                        userName: loginData.userName,
                        pwd: loginData.pwd,
                        remberMe: loginData.rememberMe,
                    })
                    .then((res: any) => {
                        // 更新token，在@/utils/routes/permission中设置过一次
                        (request.defaults.headers as any).authorization = "Bearer " + res.token;
                        // console.log(request.defaults.headers); 这里的打印结果和(A)处的打印结果相同(新token)，不懂原因
                        // 当然，此次post请求的authorization还是permissin.ts中设置的token
                        userStore.setToken(res.token);
                        setToken(res.token);
                        userStore.setRole(res.role);
                        setUserRoutes(res.role);
                        ElMessage({
                            showClose: true,
                            message: "登录成功！",
                            type: "success",
                        });
                        router.push("/dashboard");
                    })
                    .catch(() => {});
            }
        } else {
            ElMessage({ showClose: true, message: "请完成表单!", type: "error" });
        }
    });
};
</script>

<style scoped lang="scss">
h1 {
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
}
.el-form {
    .option :deep(.el-form-item__content) {
        justify-content: space-between;
        .forget {
            &:hover {
                cursor: pointer;
                text-decoration: underline;
                color: #0960bd;
            }
        }
    }
    .login-btn {
        width: 100%;
    }
}
</style>
