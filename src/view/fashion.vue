<template>
  <div>时尚</div>
</template>
<script>
export default {
  data() {
    return {
      title: "时尚"
    };
  },
  mounted() {
    this.$emit("sends", this.title);
  }
};
</script>
<style scoped>
</style>
