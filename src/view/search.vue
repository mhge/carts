<template>
  <div>发现</div>
</template>
<script>
export default {
  data() {
    return {
      title: "发现"
    };
  },
  mounted() {
    this.$emit("sends", this.title);
  }
};
</script>
<style scoped>
</style>
