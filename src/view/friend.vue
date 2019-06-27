<template>
  <div>
    <van-cell title="单元格" value="内容" size="large"/>
    <van-button @click="showPopup">展示弹出层</van-button>
    <van-popup v-model="show" position="right" :style="{ height: '100%' }">马好歌马好歌马好歌马好歌马好歌</van-popup>
  </div>
</template>

<script>
export default {
  name: "TCC",
  data() {
    return {
      show: false
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    }
  }
};
</script>

<style>
</style>
