<template>
  <div>
    <van-row>
      <van-col span="20" offset="2">
        <van-image width="276px" height="140px" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
      </van-col>
      <van-col span="20" offset="2">
        <van-field v-model="phone" left-icon="friends" label="用户名" placeholder="请输入手机号或用户名"/>
        <van-field
          v-model="password"
          type="password"
          left-icon="lock"
          label="密 码"
          placeholder="请输入密码"
        />
      </van-col>
      <van-col span="20" offset="2">
        <van-button type="primary" round size="large" @click="login()">登录</van-button>
      </van-col>
      <van-col span="9">
        <a>注册</a>
      </van-col>
      <van-col span="6" offset="5">
        <a>忘记密码?</a>
      </van-col>
    </van-row>
    <van-row class="login">
      <van-col span="6" offset="3">
        <span>—————</span>
      </van-col>
      <van-col span="6">快速登录</van-col>
      <van-col span="6">
        <span>—————</span>
      </van-col>
      <van-col span="10" offset="2">
        <share :config="config"></share>
      </van-col>
      <van-col span="10">
        <share :config="config2"></share>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import axios from "axios";
import { Dialog } from "vant";
export default {
  components: {
    [Dialog.Component.name]: Dialog.Component
  },

  data() {
    return {
      password: "",
      phone: "",
      config: {
        url: "http://www.baidu.com",
        image: "",
        sites: ["wechat"],
        disabled: [],
        wechatQrcodeTitle: "微信扫一扫：分享",
        wechatQrcodeHelper:
          "<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>"
      },
      config2: {
        url: "http://www.baidu.com",
        image: "",
        sites: ["qq"],
        disabled: []
      }
    };
  },

  methods: {
    login() {
      var _this = this;
      axios({
        url: "http://jx.xuzhixiang.top/ap/api/login.php",
        params: { username: _this.phone, password: _this.password }
      }).then(function(data) {
        console.log(data);
        var msg = data.data.msg;
        var code = data.data.code;
        if (code == 1) {
          Dialog.alert({
            message: msg
          }).then(() => {
            localStorage.setItem("uid", data.data.data.id);
            localStorage.setItem("username", data.data.data.username);
            _this.$router.push("/home");
          });
        } else {
          Dialog.alert({
            message: "请完成注册"
          }).then(() => {
            _this.$router.push("/res");
          });
        }
      });
    }
  }
};
</script>
<style scoped>
.van-image {
  margin: 50px 0;
}
.van-button {
  margin-top: 30px;
}
a {
  font-size: 14px;
}
.van-col {
  text-align: center;
}
.login {
  margin-top: 30px;
}
.van-col--10 {
  margin-top: 20px;
}
</style>
