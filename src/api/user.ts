import service from "@/utils/request";

/**
 * 登录接口
 * @param username 用户名
 * @param password 密码
 * @returns
 */
export function login(username: string, password: string): any {
  return service.request({
    url: "/login/",
    method: "post",
    data: {
      username,
      password,
    },
  });
}

export function user() {
  return service.request({
    url: "/user/",
    method: "post",
  });
}
