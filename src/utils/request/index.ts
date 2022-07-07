import RequestSuper from "./request";

import { ElMessage } from "element-plus";

const Request = new RequestSuper({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 1000 * 60 * 5,
  interceptors: {
    requestInterceptorsCatch: (err) => {
      console.log(err);
      return Promise.reject(err);
    },
    responseInterceptorsCatch: (err) => {
      // console.log(err);
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
