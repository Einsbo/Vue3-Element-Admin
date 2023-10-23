import axios from "axios";

const service = axios.create({
  baseURL: "",
  timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    return config;
  },
  (error) => {
    console.log(error, "src/utils/request.ts-15");
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    return response;
  },
  (error) => {
    // do something with response error
    console.log("err" + error + "src/utils/request.ts-29");

    return Promise.reject(error);
  }
);

export default service;
