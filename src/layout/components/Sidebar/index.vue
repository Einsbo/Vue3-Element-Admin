<template>
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
        <SidebarItem :sidebarItems="routes" />
      </el-menu>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import SidebarItem from "./SidebarItem.vue";
import { routes } from "@/router";

// // let route = useRoute();
// console.log(routes);

// 获取路由;
// const routes = [
//   { path: "/home", name: "Home", icon: "Menu" },
//   { path: "/about", name: "About", icon: "About" },
//   {
//     path: "/contact",
//     name: "Contact",
//     children: [
//       { path: "/contact/phone", name: "Phone" },
//       {
//         path: "/contact/email",
//         name: "Email",
//         children: [{ path: "/contact/email/1", name: "Email 1" }],
//       },
//     ],
//   },
//   { path: "/login", name: "Login" },
//   { path: "/register", name: "Register" },
// ];

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
