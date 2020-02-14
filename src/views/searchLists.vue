<template>
  <div class="searchLists">
    <div class="input_block">
      <a-input-search placeholder="查找图片素材..." style="width: 200px" v-model="phrase" @search="onSearch" />
    </div>
    <div class="search_block">
      <search-list :img_type = 'img_type'></search-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchLists",
  data() {
    return {
      phrase: this.$route.query.text,
      img_type: this.$route.query.img_type
    };
  },
  props: {},
  components: {},
  mounted() {},
  methods: {
    onSearch: function() {}
  }
};
</script>

<style scoped>
.searchLists {
  position: relative;
  padding-top: 1px;
}
.input_block {
  z-index: 50;
  position: relative;
  margin: 25px auto 0;
  text-align: left;
  width: 60%;
}

.search_block {
  margin-top: 2%;
}

@media screen and (max-width: 800px) {
  .input_block {
    width: 90%;
    margin-top: 11%;
    padding-left: 0;
  }
}
@media screen and (max-width: 500px) {
  .input_block {
    width: 95%;
    margin-top: 22%;
  }
}
</style>
<style>
.input_block .ant-input-affix-wrapper {
  width: 530px !important;
  height: 45px;
}

@media screen and (max-width: 800px) {
  .input_block .ant-input-affix-wrapper {
    width: 100% !important;
    height: 45px;
  }
}
</style>