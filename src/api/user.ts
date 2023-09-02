import service from "@/utils/request";

/**
 * 登录接口
 * @param data 其中包含用户名和密码
 * @returns
 */
export function login(data) {
  return service.request({
    url: "/user/login",
    method: "post",
    data,
  });
}

export function user() {
  return service.request({
    url: "/user/other",
    method: "post",
  });
}
