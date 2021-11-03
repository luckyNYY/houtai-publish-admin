<template>
  <el-menu
    :uniqueOpened="true"
    default-active="/"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#002033"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
    :collapse="isCollapse"
  >
    <el-menu-item index="/">
      <i class="el-icon-house"></i>
      <template #title>后台首页</template>
    </el-menu-item>
    <el-menu-item index="/user">
      <i class="el-icon-user"></i>
      <template #title>读者管理</template>
    </el-menu-item>
    <el-menu-item index="/article">
      <i class="el-icon-document"></i>
      <template #title>图书管理</template>
    </el-menu-item>
    <el-menu-item index="/comment">
      <i class="el-icon-chat-dot-square"></i>
      <template #title>读者意见</template>
    </el-menu-item>
    <el-menu-item index="/setting">
      <i class="el-icon-s-tools"></i>
      <template #title>个人设置</template>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: "Aside",
  props: ["is-collapse"],
  data() {
    return {
      // isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="less" scoped>
</style>
