import service from "@/utils/request";

export function login(account: string, password: string) {
  return service.request({
    url: "/user/login",
    method: "post",
    data: {
      account,
      password,
    },
  });
}

export function userTest(id: string) {
  return service.request({
    url: "/user/test",
    method: "get",
    params: { id },
  });
}
