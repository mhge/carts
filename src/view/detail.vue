<template>
  <div>
    <van-nav-bar title="购物详情" fixed left-text="返回" left-arrow @click-left="onClickLeft"/>
    <van-field/>
    <!-- 可变动数据 -->
    <van-row>
      <van-col span="24">
        <img :src="title.pimg">
      </van-col>
      <van-col span="22" offset="2">
        <p>{{title.pname}}</p>
        <p>{{title.pdesc}}</p>
        <p>${{title.pprice}}</p>
      </van-col>
    </van-row>
    <van-row class="detail">
      <van-col span="8">已售101件</van-col>
      <van-col span="8">暂无评价</van-col>
      <van-col span="8">200人喜欢</van-col>
    </van-row>
    <div class="store">
      <img src="../assets/xz.jpg">
      <div>
        <span>小仙女店铺</span>
        <span>关注</span>
      </div>
    </div>
    <van-row>
      <van-col span="20" offset="4">店铺微信：13212</van-col>
      <van-col span="20" offset="1">搭配参考</van-col>
      <van-col span="8">
        <img src="../assets/xz.jpg">
      </van-col>
      <van-col span="8">
        <img src="../assets/xz.jpg">
      </van-col>
      <van-col span="8">
        <img src="../assets/xz.jpg">
      </van-col>
      <van-field/>
    </van-row>

    <van-button size="large" class="queren" @click="get">进入订单</van-button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      title: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    get() {
      var pid = this.$route.params.pid;
      this.$router.push("/order/" + pid);
    }
  },
  mounted() {
    var _this = this;
    console.log(_this.$route.params.pid);
    axios({
      url: "http://jx.xuzhixiang.top/ap/api/detail.php",
      params: { id: _this.$route.params.pid }
    }).then(function(data) {
      //console.log(data.data.data);
      _this.title = data.data.data;
    });
  }
};
</script>
<style scoped>
div img {
  width: 100%;
  height: 300px;
}
.detail {
  text-align: center;
  font-size: 12px;
  color: gray;
}
.store {
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.store span:first-child {
  margin-left: 10px;
}
.store span:last-child {
  margin-left: 160px;
}
.store img {
  width: 50px;
  border-radius: 50%;
  height: 46px;
  margin-left: 10px;
}
.store ~ .van-row .van-col:nth-child(1) {
  font-size: 12px;
  color: gray;
  margin-bottom: 30px;
}
.store ~ .van-row .van-col--8 {
  margin-top: 10px;
  text-align: center;
}
.store ~ .van-row .van-col--8 img {
  width: 112px;
  height: 120px;
}
.queren {
  position: fixed;
  bottom: 0;
}
.van-col--22 p:nth-child(2) {
  font-size: 14px;
}
.van-col--22 p:nth-child(3) {
  color: red;
}
</style>
