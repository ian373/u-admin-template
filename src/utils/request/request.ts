import axios from "axios";

import type { AxiosInstance } from "axios";

import type { RequestConfig, RequestInterceptors } from "@/types/request";

class Requset {
  instance: AxiosInstance;
  interceptorsObj?: RequestInterceptors;

  constructor(config: RequestConfig) {
    this.instance = axios.create(config);
    this.interceptorsObj = config.interceptors;

    // 全局请求拦截器
    this.instance.interceptors.request.use(
      (conf) => conf,
      (err) => Promise.reject(err)
    );
    // 实例拦截器
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch
    );

    this.instance.interceptors.response.use(
      this.interceptorsObj?.responseInterceptors,
      this.interceptorsObj?.responseInterceptorsCatch
    );

    // 全局响应拦截器,保证最后执行
    this.instance.interceptors.response.use(
      // 只返回data对象获取数据，其它内容不需要
      (res) => res.data,
      (err) => Promise.reject(err)
    );
  }
}

export default Requset;
