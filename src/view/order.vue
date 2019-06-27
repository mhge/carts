<template>
  <div>
    <van-nav-bar title="确认订单" fixed left-text="返回" left-arrow @click-left="onClickLeft"/>
    <van-field/>

    <div class="contents">
      <div class="content">
        <img :src="tt.pimg">
        <van-row>
          <van-col span="20">{{tt.pname}}</van-col>
          <van-col span="20">${{tt.pprice}}</van-col>
          <van-col span="12">购买数量：</van-col>
          <van-col span="2" offset="2">
            <button @click="jia()">+</button>
          </van-col>
          <van-col span="4">
            <input type="text" :value="value">
          </van-col>
          <van-col span="2">
            <button @click="jian()">-</button>
          </van-col>
          <van-col span="10" offset="12">合计：${{tt.pprice*value}}</van-col>
        </van-row>
      </div>
    </div>

    <van-submit-bar :price="tt.pprice*value*100" button-text="加入购物车" @submit="onSubmit"></van-submit-bar>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      value: "1",
      tt: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onSubmit() {
      var uid = localStorage.getItem("uid");
      // console.log(this.value);
      // console.log(uid);
      // console.log(this.$route.params.pid);
      var _this = this;
      axios({
        url: "http://jx.xuzhixiang.top/ap/api/add-product.php",
        params: { uid: uid, pid: _this.$route.params.pid, pnum: _this.value }
      }).then(function() {
        _this.$router.push("/cart");
      });
    },
    jia() {
      this.value++;
    },
    jian() {
      if (this.value > 1) {
        this.value--;
      } else {
        this.value = 1;
      }
    }
  },
  mounted() {
    var _this = this;
    axios({
      url: "http://jx.xuzhixiang.top/ap/api/detail.php",
      params: { id: _this.$route.params.pid }
    }).then(function(data) {
      console.log(data.data.data);
      _this.tt = data.data.data;
    });
  }
};
</script>
<style scoped>
.van-icon {
  font-size: 26px;
  margin: 10px 0;
}
.add {
  margin: 10px 0;
}
.contents {
  box-shadow: 0 0 20px #e4e2e2;
  margin: 20px 0;
}
.contents .van-checkbox {
  padding-top: 10px;
}
.content {
  display: flex;
  margin-top: 10px;
}
.content .van-col {
  margin-top: 8px;
}
.content img {
  width: 130px;
  height: 120px;
  margin: 6px;
}
.content input {
  width: 50px;
}
</style>
