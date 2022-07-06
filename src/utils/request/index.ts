import Request from "./request";

import { ElMessage } from "element-plus";

const _request = new Request({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 1000 * 60 * 5,
  interceptors: {
    requestInterceptors: (config) => {
      // Token函数实现，能不能只调用一次getToken()?
      const token = getToken();
      if (token) {
        config.headers["authorization"] = token;
      }
      return config;
    },

    requestInterceptorsCatch: (err) => {
      console.log(err);
      return Promise.reject(err);
    },
    responseInterceptorsCatch: (err) => {
      const res = err.data;
      ElMessage({
        showClose: true,
        message: res.data.msg,
        type: "error",
      });
      return Promise.reject(err);
    },
  },
});

export default _request.instance;
