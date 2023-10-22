<template>
  <div id="login">
    <form action="" id="loginForm">
      <h2>Login Form</h2>
      <el-input v-model="loginForm.account" placeholder="Username" clearable>
        <template #suffix>
          <el-icon><User /></el-icon>
        </template>
      </el-input>
      <el-input
        v-model="loginForm.password"
        type="password"
        placeholder="Password"
        show-password
      >
      </el-input>
      <el-button type="primary" @click="handleLogin">Login</el-button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { login } from "@/api/user";
import { setToken } from "@/utils/authToken";

const router = useRouter();

const loginForm = reactive({
  account: "",
  password: "",
});

const handleLogin = () => {
  login(loginForm).then((res: any) => {
    const data = res.data;
    // console.log(data);

    if (data.code === 200) {
      setToken(data.token);
      router.push("/");
    } else {
      ElMessage.error(data.message);
    }
  });
};
</script>

<style scoped lang="scss">
#login {
  height: 100%;
  background-image: url("./login.webp");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding-top: 20%;

  form {
    h2 {
      padding: 20px 0;
    }

    width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 5px #ccc;
    display: flex;
    align-items: center;
    flex-direction: column;

    button {
      margin-top: 14px;
      width: 100%;
    }
  }
}
</style>
