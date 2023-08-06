<template>
  <section class="login">
    <div class="from-box">
      <div class="from-value">
        <h2>login</h2>
        <div class="inputbox">
          <!-- <ion-icon name="mail-outline"></ion-icon> -->
          <el-icon><Message /></el-icon>
          <input type="email" required />
          <label for="">邮箱</label>
        </div>

        <div class="inputbox">
          <el-icon><Unlock /></el-icon>
          <!-- <ion-icon name="lock-closed-outline"></ion-icon> -->
          <input type="passowrd" required />
          <label for="">密码</label>
        </div>

        <div class="forget">
          <input type="checkbox" />
          <label for="">记住密码</label>
          <a href="#">忘记密码</a>
        </div>

        <button>登录</button>
        <div class="register">
          <p>Don't have a account? <a href="#">注册</a></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Message, Unlock } from "@element-plus/icons-vue";
</script>

<style scoped lang="scss">
section {
  // section 中的元素都居中
  display: flex;
  justify-content: center;
  align-items: center;

  // 设置高度
  min-height: 100vh;
  width: 100%;

  // 背景图片 no-repeat 不重复, center 居中, cover 拉伸
  background: url("./login.webp") no-repeat;
  background-position: center;
  background-size: cover;

  .from-box {
    // 设置相对定位
    position: relative;
    width: 400px;
    height: 450px;

    // transparent 透明, backdrop-filter 模糊
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);

    // flex 布局, 水平垂直居中
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 200%;
      color: #fff;
      text-align: center;
    }

    .inputbox {
      position: relative;
      margin: 30px 0;
      widows: 310px;
      border-bottom: 2px solid #fff;

      .el-icon {
        position: absolute;
        right: 8px;
        color: #000;
        font-size: 110%;
        top: 20px;
      }

      label {
        position: absolute;
        left: 5px;

        // absolute 绝对定位, top: 50%, transform: translateY(-50%) 做到垂直居中
        top: 50%;
        transform: translateY(-50%);
        color: #fff;
        font-size: 1em;
        pointer-events: none;
        // transition 过渡
        transition: 0.5s;
      }

      // input:focus ~ label, input:valid ~ label
      // input 获得焦点时, label 上移
      input:focus ~ label,
      input:valid ~ label {
        top: -5px;
      }

      input {
        width: 100%;
        height: 50px;

        // transparent 透明
        background-color: transparent;
        border: none;
        outline: none;
        font-size: 1em;
        padding: 0 35px 0 5px;
        color: #fff;
      }
    }

    .forget {
      margin: -15px 0 15px 0;
      font-size: 90%;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;

      * {
        margin: 0 10px 0 0;
      }

      input {
        margin-right: 3px;
      }

      a {
        color: #0a1415;
      }
    }

    button {
      width: 100%;
      height: 40px;
      border-radius: 40px;
      background: #fff;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 100%;
      font-weight: 600;
    }

    .register {
      font-size: 90%;
      color: #000;
      text-align: center;
      margin: 25px 0 10px 0;

      p a {
        font-weight: 600;
        color: #996e46;
        margin-left: 5px;
      }
    }
  }
}
</style>
