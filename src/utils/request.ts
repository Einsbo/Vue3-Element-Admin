import axios from "axios";

const service = axios.create({
  baseURL:
    "https://www.fastmock.site/mock/44668ccc3b8a5ea748123fa2c79d0120/vue-element-admin",
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    return config;
  },
  (error) => {
    // do something with request error
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    return res;
  },
  (error) => {
    // do something with response error
    return Promise.reject(error);
  }
);

export default service;
