<template>
  <div>
    <van-nav-bar title="购物车列表" fixed left-text="返回" left-arrow @click-left="onClickLeft"/>
    <van-field/>
    <van-row class="add">
      <van-col span="12" offset="11">
        <span @click="add()">
          <van-icon name="add"/>
        </span>
      </van-col>
      <van-col span="12" offset="9">添加收货地址</van-col>
    </van-row>

    <div class="contents" v-for="i in list">
      <input type="checkbox" v-bind:checked="i.isSelect" @click="i.isSelect=!i.isSelect">
      <div class="content">
        <img :src="i.pimg">
        <van-row>
          <van-col span="20">{{i.pname}}</van-col>
          <van-col span="20">${{i.pprice}}</van-col>
          <van-col span="12">购买数量：{{i.pnum}}</van-col>
          <van-col span="12" offset="10" :la="i.pprice*i.pnum">
            合计：
            {{i.pprice*i.pnum}}
          </van-col>
        </van-row>
      </div>
    </div>
    <van-field/>
    <van-submit-bar :price="0" button-text="提交订单" @submit="onSubmit">
      全选
      <input type="checkbox" name>
    </van-submit-bar>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      checkeds: false,
      checked: false,
      value: "1",
      tt: "",
      list: "",
      check_goods: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onSubmit() {},
    add() {
      this.$router.push("/address");
    }
  },
  mounted() {
    var _this = this;
    var uid = localStorage.getItem("uid");
    axios({
      url: "http://jx.xuzhixiang.top/ap/api/cart-list.php",
      params: { id: uid }
    }).then(function(data) {
      //console.log(data.data.data);
      _this.list = data.data.data;
    });
    this.list.map(function(i) {
      _this.$set(i, "isSelect", true);
    });
  }
};
</script>
<style scoped>
.van-icon {
  font-size: 26px;
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
</style>
