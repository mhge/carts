<template>
  <div id="a">
    <van-nav-bar
      :title="title"
      left-text="返回"
      :right-text="username"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      fixed
    />
    <router-view @sends="send"></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="search">发现</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="friend">我的</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="fashion">时尚</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  inject: ["reload"],
  data() {
    return {
      active: 0,
      title: "",
      username: "登录"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      var username = localStorage.getItem("username");
      if (!username == null) {
        console.log(22);
      } else {
        localStorage.removeItem("username");
        this.reload();
      }
    },
    send(data) {
      this.title = data;
    }
  },
  mounted() {
    var username = localStorage.getItem("username");
    if (username) {
      this.username = "欢迎 ," + username + "退出";
    } else {
      // this.$router.push("/login");
    }
  }
};
</script>
<style scoped>
</style>
