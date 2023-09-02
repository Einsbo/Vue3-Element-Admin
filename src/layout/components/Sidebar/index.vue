<template>
  <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">expand</el-radio-button>
    <el-radio-button :label="true">collapse</el-radio-button>
  </el-radio-group> -->
  <el-row>
    <el-col :span="12">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="/home"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <SidebarItem :sidebarItems="route" />
      </el-menu>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import SidebarItem from "./SidebarItem.vue";

// 获取路由
const route = [
  { path: "/home", name: "Home" },
  { path: "/about", name: "About" },
  {
    path: "/contact",
    name: "Contact",
    children: [
      { path: "/contact/phone", name: "Phone" },
      {
        path: "/contact/email",
        name: "Email",
        children: [{ path: "/contact/email/1", name: "Email 1" }],
      },
    ],
  },
  { path: "/login", name: "Login" },
  { path: "/register", name: "Register" },
];

const handleOpen = (key: string, keyPath: object) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: object) => {
  console.log(key, keyPath);
};
</script>

<style scoped lang="scss">
.el-menu-vertical-demo {
  height: 100%;
  overflow: auto;

  .sidebar {
    background: #b32a2a;
  }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
