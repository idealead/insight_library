<template>
  <div class="search">
    <a-input-group compact>
      <a-select style="min-width: 6%;text-align: center;height:50px" v-model="model">
        <a-select-option value="image">图片</a-select-option>
        <a-select-option value="pattern">图形</a-select-option>
      </a-select>
      <a-input
        class="search_box"
        style="width: 50%;text-align: left;height:50px; border: 1px solid #fff;;border-left: 1px solid #d9d9d9"
        placeholder="查找图片..."
        v-model="phrase"
      />
      <a-icon type="search" class="search_btn" @click="searchFunc(model, phrase)" />
    </a-input-group>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      model: "image",
      phrase: ""
    };
  },
  props: {},
  mounted() {},
  methods: {
  }
};
</script>

<style scoped>
.search {
  position: absolute;
  z-index: 2;
  width: 80%;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 44%;
}
.search_box {
  position: relative;
}
.search_box:focus {
  box-shadow: none;
  border: none;
}
.search_btn {
  height: 50px;
  background-color: #f84949;
  padding: 0 18px;
  font-size: 20px;
  line-height: 57px;
  color: #fff;
  cursor: pointer;
  overflow: hidden;
  border: none;
}
.search_btn:hover {
  filter: brightness(0.9);
}
</style>
<style>
.search .ant-select-selection--single {
  height: 50px;
}
.search .ant-select-selection__rendered {
  line-height: 50px;
}
.search .ant-select-selection-selected-value {
  float: none;
}
.search .ant-select-selection {
  border: none;
  border-right: 1px solid #d9d9d9;
}
</style>