<template>
  <div>
    <form action="" id="loginForm">
      <el-input v-model="loginForm.account" placeholder="账户" clearable />
      <el-input
        v-model="loginForm.password"
        type="password"
        placeholder="密码"
        show-password
      />
      <el-button type="primary">登陆</el-button>
    </form>
  </div>
  <el-icon>
    <Edit />
  </el-icon>
</template>

<script setup lang="ts">
const loginForm = reactive({
  account: "",
  password: "",
});
</script>

<style scoped lang="scss"></style>
