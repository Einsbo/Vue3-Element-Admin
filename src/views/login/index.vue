<template>
  <section class="login">
    <div class="from-box">
      <div class="from-value">
        <h2>login</h2>
        <div class="inputbox">
          <!-- <ion-icon name="mail-outline"></ion-icon> -->
          <input type="email" required />
          <label for="">邮箱</label>
        </div>

        <div class="inputbox">
          <!-- <ion-icon name="lock-closed-outline"></ion-icon> -->
          <input type="passowrd" required />
          <label for="">密码</label>
        </div>

        <div class="forget">
          <label for=""><input type="checkbox" />记住密码</label>
          <a href="">忘记密码</a>
        </div>

        <button>登录</button>
        <div class="register">
          <p>Don't have a account <a href="">注册</a></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;

  background: url("./login.webp") no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
