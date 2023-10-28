import service from "@/utils/request";

export function login(username: string, password: string) {
  return service.request({
    url: "/login",
    method: "post",
    data: {
      username,
      password,
    },
  });
}
