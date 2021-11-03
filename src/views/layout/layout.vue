<template>
  <el-container class="layout-container">
    <el-aside width="auto">
      <Aside class="aside-menu" :is-collapse="isCollapse"
    /></el-aside>
    <el-container>
      <el-header>
        <div>
          <i
            :class="{
              'el-icon-s-fold': isCollapse,
              'el-icon-s-unfold': !isCollapse,
            }"
            @click="isCollapse = !isCollapse"
          ></i>
          图书馆管理系统
        </div>
        <el-dropdown>
          <span class="el-dropdown-link">
            <div class="avatar-wrap">
              <img
                class="avatar"
                src="https://images.unsplash.com/photo-1441034281545-78296c3a6934?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              />
              <span>{{ user.username }}</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </div>
          </span>
          <template v-slot:dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item @click="onLogout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>
      <el-main height="auto"><router-view /></el-main>
    </el-container>
  </el-container>
</template>
<script>
import Aside from "./components/aside";
// import { getUSerProfile } from '@/api/user'
//import globalBus from "@/utils/global-bus";

export default {
  name: "LayoutIndex",
  components: {
    Aside,
  },
  data() {
    return {
      user: {
        username: "nyy",
      }, //当前用户登录信息
      isCollapse: false,
    };
  },
  methods: {
    // loadUserProflie() {
    //     getUSerProfile().then(res => {
    //         console.log()
    //         this.user = res.data.data
    //     })
    // },
    onLogout() {
      //console.log("退出了");

      this.$confirm("是否退出登录状态？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          //把用户状态清除
          // window.localStorage.removeItem('user')
          //跳转至登录页面
          this.$router.push("/login");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出",
          });
        });
    },
  },
  create() {
    //组件初始化好之后，请求用户资料
    this.loadUserProflie();
    //注册自定义事件
    // globalBus.$on("update-user", (data) => {
    //   console.log("update-user",data);
    //   this.user.name = data.name
    //   this.user.photo = data.photo
    // });
  },
};
</script>

<style scoped lang="less">
.layout-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.el-header {
  color: var(--el-text-color-primary);
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
  .aside-menu {
    height: 100%;
  }
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}
.avatar-wrap {
  display: flex;
  align-items: center;
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    margin-right: 10px;
  }
}
</style>
