<template>
  <div class="login">
    <form action="" id="loginForm">
      <h2>系统登录</h2>
      <el-input v-model="loginForm.account" placeholder="账户" clearable>
        <template #suffix>
          <el-icon><User /></el-icon>
        </template>
      </el-input>
      <el-input
        v-model="loginForm.password"
        type="password"
        placeholder="密码"
        show-password
      >
      </el-input>
      <el-button type="primary" @click="handleLogin">登陆</el-button>
    </form>
  </div>
</template>

<script setup>
import { login } from "@/api/user";
import { setToken } from "@/utils/authToken";

const router = useRouter();

const loginForm = reactive({
  account: "",
  password: "",
});

const handleLogin = () => {
  login(loginForm).then((res) => {
    const data = res.data;
    console.log(data);

    if (data.code === 200) {
      setToken(data.token);
      router.push("/");
    } else {
      ElMessage.error(data.msg);
    }
  });
};
</script>

<style scoped lang="scss">
.login {
  height: 100%;
  background-image: url("./login.webp");
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;

  form {
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 5px #ccc;
    display: flex;
    flex-direction: column;
  }
}
</style>
