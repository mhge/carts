<template>
  <div>
    <van-field/>
    <van-search placeholder="请输入搜索关键词" v-model="value"/>
    <van-row>
      <van-col span="24">
        <img src="https://img.yzcdn.cn/vant/cat.jpeg">
      </van-col>
      <van-col span="8">
        <img src="https://img.yzcdn.cn/vant/cat.jpeg">
        <p>热销榜单</p>
      </van-col>
      <van-col span="8">
        <div @click="ps()">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg">
          <p>配饰</p>
        </div>
      </van-col>
      <van-col span="8">
        <img src="https://img.yzcdn.cn/vant/cat.jpeg">
        <p>私人制定</p>
      </van-col>
      <van-col span="20" offset="2">
        <div>时尚女装</div>
      </van-col>
      <van-col span="20" offset="2">
        <div>潮流男装</div>
      </van-col>
    </van-row>
    <van-field/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "首页",
      value: ""
    };
  },
  mounted() {
    this.$emit("sends", this.title);
  },
  methods: {
    ps() {
      this.$router.push("/ps");
    }
  }
};
</script>
<style scoped>
img {
  height: 100px;
  width: 100%;
}
.van-col--8 {
  margin-top: 30px;
  text-align: center;
}
.van-col--8 img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.van-col {
  font-size: 14px;
  color: grey;
}
p {
  margin: 0;
}
.van-col--20 > div {
  border: 2px solid grey;
  text-align: center;
  height: 100px;
  line-height: 100px;
  margin: 20px 0;
}
</style>
