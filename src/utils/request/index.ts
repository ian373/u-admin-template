import { useUserStore } from "@/store/user";
import axios, { AxiosError } from "axios";
import { ElMessage } from "element-plus";

const request_client = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 5000,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function requestErrorInterceptor(error: any) {
    let errorMessage = "未知错误";

    if (error instanceof AxiosError) {
        errorMessage = error.response?.data.msg || error.message;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    }

    ElMessage({
        showClose: true,
        message: errorMessage,
        type: "error",
    });

    return Promise.reject(error);
}

request_client.interceptors.request.use((config) => {
    const userStore = useUserStore();
    config.headers.set("authorization", userStore.token);

    return config;
}, requestErrorInterceptor);

request_client.interceptors.response.use((response) => {
    // do something with response data
    return response;
}, requestErrorInterceptor);

export { request_client };
