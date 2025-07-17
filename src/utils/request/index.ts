import RequestSuper from "./request";

import { ElMessage } from "element-plus";

const isDev = process.env.NODE_ENV !== "production";

const Request = new RequestSuper({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 1000 * 60 * 5,
    interceptors: {
        // requestInterceptors: (config) => {
        //   console.log("request:", config);
        //   return config;
        // },
        requestInterceptorsCatch: (err) => {
            if (isDev) console.log("request_err:", err);

            return Promise.reject(err);
        },
        responseInterceptorsCatch: (err) => {
            if (isDev) console.log("response_err:", err);

            const res = err.response.data;
            ElMessage({
                showClose: true,
                message: res.msg,
                type: "error",
            });
            return Promise.reject(err);
        },
    },
}); // 可能有需要导出Request的情况

const request = Request.instance;

export { request };
