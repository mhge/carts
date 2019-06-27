<template>
  <div>
    <van-nav-bar title="购物详情" fixed left-text="返回" left-arrow @click-left="onClickLeft"/>
    <van-field/>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      areaList: {
        province_list: {
          110000: "北京市",
          120000: "天津市",
          130000: "河北省"
        },
        city_list: {
          110100: "北京市",
          110200: "xx县",
          120100: "天津市",
          120200: "xx县",
          130100: "河北省",
          130020: "xx县"
        },
        county_list: {
          110101: "东城区",
          110102: "西城区",
          110105: "朝阳区",
          110106: "丰台区",
          120101: "和平区",
          120102: "河东区",
          120103: "河西区",
          120104: "南开区",
          120105: "河北区"
        }
      },
      searchResult: []
    };
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>
<style scoped>
</style>
