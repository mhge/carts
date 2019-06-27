<template>
  <div>
    <van-row>
      <van-col span="24">
        <img src="https://img.yzcdn.cn/vant/cat.jpeg">
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
        <van-button type="primary" round size="large" @click="res()">注册</van-button>
      </van-col>
      <van-col span="6" offset="14">
        <a>账号密码登录</a>
      </van-col>
    </van-row>
    <van-row class="login">
      <van-col span="4" offset="2">
        <span>———</span>
      </van-col>
      <van-col span="12">请使用一下方式登录</van-col>
      <van-col span="4">
        <span>———</span>
      </van-col>
      <van-col span="6" offset="2">
        <share :config="config"></share>
      </van-col>
      <van-col span="6">
        <share :config="config2"></share>
      </van-col>
      <van-col span="6">
        <share :config="config3"></share>
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
      },
      config3: {
        url: "http://www.baidu.com",
        image: "",
        sites: ["weibo"],
        disabled: []
      }
    };
  },
  methods: {
    res() {
      var _this = this;
      axios({
        url: "http://jx.xuzhixiang.top/ap/api/reg.php",
        params: { username: _this.phone, password: _this.password }
      }).then(function(data) {
        // console.log(data.data);
        var msg = data.data.msg;
        Dialog.alert({
          message: msg
        }).then(() => {
          _this.$router.push("/login");
        });
      });
    }
  }
};
</script>
<style scoped>
.van-row:nth-child(1) > .van-col:nth-child(2) {
  margin-top: 60px;
}
img {
  height: 100px;
  width: 100%;
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
.van-col--6 {
  margin-top: 20px;
}
</style>
