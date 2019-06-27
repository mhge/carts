<template>
  <div>
    <van-nav-bar title="配饰" fixed left-text="返回" left-arrow @click-left="onClickLeft"/>
    <van-field/>
    <van-row>
      <van-col span="10" class="hh">全部配饰</van-col>
      <van-col span="6" offset="6" class="hh">
        换一换
        <van-icon name="replay"/>
      </van-col>
      <div class="eight" v-for="i in list">
        <van-col span="6">
          <img :src="i.pimg">
          <p>{{i.pname}}</p>
        </van-col>
      </div>
    </van-row>
    <van-row class="nav">
      <van-col span="6">默认</van-col>
      <van-col span="6">销量</van-col>
      <van-col span="6">
        价格
        <van-icon name="descending"/>
      </van-col>
      <van-col span="6" class="select">
        <van-button type="info" @click="showPopup">筛选></van-button>
        <van-popup v-model="show" position="right" :style="{ height: '100%' }">Lorem ipsum dolor</van-popup>
      </van-col>
    </van-row>
    <van-row class="tw">
      <div v-for="i in list" @click="gt(i.pid)">
        <van-col span="12">
          <img :src="i.pimg">
          <h6>{{i.pdesc}}</h6>
          <p>${{i.pprice}}</p>
        </van-col>
      </div>
    </van-row>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      show: false,
      list: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/main");
    },
    showPopup() {
      this.show = true;
    },
    gt(pid) {
      this.$router.push("/detail/" + pid);
    }
  },
  mounted() {
    var _this = this;
    axios({
      url: "http://jx.xuzhixiang.top/ap/api/productlist.php",
      params: { uid: "12209" }
    }).then(function(data) {
      // console.log(data.data.data);
      _this.list = data.data.data;
      console.log(_this.list);
    });
  }
};
</script>
<style scoped>
.hh {
  margin-top: 20px;
  margin-bottom: 20px;
}
.van-col--6 img {
  width: 52px;
  height: 52px;
  border-radius: 50%;
}
.van-col {
  text-align: center;
}
.nav {
  border-top: 1px solid gray;
  padding: 20px 0;
}
.tw img {
  width: 158px;
  height: 180px;
}
.van-button {
  background: white;
  border: none;
  color: black;
  height: 20px;
}
.select {
  margin-top: -10px;
}
h6 {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
}
</style>
