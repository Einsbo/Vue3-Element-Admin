import axios from "axios";

const service = axios.create({
	baseURL: "https://www.fastmock.site/mock/44668ccc3b8a5ea748123fa2c79d0120/vue-element-admin",
	timeout: 5000,
});

// request interceptors
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

// response interceptors
service.interceptors.response.use(
	/**
	 * If you want to get http information such as headers or status
	 * please return response => response
	 */

	(response) => {
		const res = response.data;

		console.log(res, "service.interceptors.response");

		if (res.code === 200) {
			console.log("res.code === 200");
			ElMessage("this is a message");
		}
		return res;
	},
	(error) => {
		// do something with response error
		console.log("err" + error + "src/utils/request.ts-29");

		return Promise.reject(error);
	}
);

export default service;
