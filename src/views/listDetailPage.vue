<template>
  <div class="listDetail">
    <div class="inputBlock">
      <a-input-search
        placeholder="查找图片素材..."
        class="listDetail_input"
        enterButton
        @search="onSearch"
        v-model="value"
      />
    </div>
    <div class="mainBlock">
      <a-divider orientation="left"></a-divider>
      <div class="detail_row">
        <div class="detail_left">
          <div class="left_content">
            <div class="imageConWapper">
              <img :src="data.path" alt />
            </div>
            <div class="imageOtherWapper">
              <a-button>
                <a-icon type="download" />下载素材
              </a-button>
            </div>
          </div>
        </div>
        <div class="detail_right">
          <div class="tags_info">
            <div class="h">标签</div>
            <div class="tags flex">
              <a-tag v-for="(item, index) in data.tags" :key="index">{{item.name}}</a-tag>
            </div>
          </div>
          <div class="theme_info">
            <div class="h">主题</div>
            <div class="theme flex">
              <a-tag v-for="(item, index) in data.themes" :key="index">{{item.name}}</a-tag>
            </div>
          </div>
          <div class="basic_info">
            <div class="h">基本信息</div>
            <a-list :split="false">
              <a-list-item>ID：{{data.id}}</a-list-item>
              <a-list-item>作者/来源：{{data.user_name}}</a-list-item>
              <a-list-item>尺寸：{{data.size_width}} x {{data.size_height}}px</a-list-item>
              <a-list-item>存储格式：{{data.type}}</a-list-item>
              <a-list-item>介绍：{{data.intro}}</a-list-item>
            </a-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "listDetail",
  data() {
    return {
      value: "",
      data: {
        id: 0,
        path: require("@img/pic1.jpg"),
        type: "JPG",
        user_id: 10262,
        user_name: "lucas",
        size_width: 200,
        size_height: 500,
        intro: "非特定使用范围版权图片",
        tags: [
          { id: 1, name: "汽车" },
          { id: 45, name: "太阳" }
        ],
        themes: [{ id: 1, name: "汽车" }]
      }
    };
  },
  props: {},
  components: {},
  mounted() {},
  methods: {
    onSearch(value) {
      console.log(value);
    }
  }
};
</script>

<style scoped>
.listDetail {
  height: 100%;
  margin-top: 90px;
}
.inputBlock {
  display: flex;
  padding: 0 75px 20px;
}

.listDetail_input {
  width: 80%;
}
.mainBlock {
  width: 100%;
  min-height: 880px;
  background: #f4f4f4;
}
.detail_row {
  display: flex;
  height: 669px;
  /* padding: 0 75px 20px; */
  max-width: 1280px;
  margin: 0 auto;
}
.detail_left {
  display: inline-block;
  vertical-align: top;
  /* width: 68%; */
  flex: 1;
}
.detail_right {
  display: inline-block;
  vertical-align: top;
  width: 32%;
  padding: 20px 20px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.03);
}
.left_content {
  height: 100%;
  position: relative;
  max-width: 810px;
  min-height: auto;
  background: #fff;
  border-radius: 2px;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-around;
}
.imageConWapper {
  width: 100%;
  height: 85%;
}
.imageConWapper img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.h {
  text-align: left;
  color: rgba(0, 0, 0, 0.87);
  font-weight: 500;
  margin-bottom: 10px;
}
.tags_info,
.theme_info {
  margin-bottom: 25px;
}
@media screen and (max-width: 1280px) {
  .detail_right {
    width: 25%;
  }
}
@media screen and (max-width: 679px) {
  .detail_row {
    flex-direction: column;
  }
  .detail_right {
    width: 100%;
  }
  .inputBlock {
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    padding: 0
  }
}
</style>
<style>
.listDetail .ant-btn-primary {
  background: #f84949;
  border-color: #f84949;
  height: 50px;
  font-size: 25px;
}
.listDetail .ant-btn-primary:hover,
.listDetail .ant-btn-primary:focus {
  background: #f84949;
  border-color: #f84949;
}
.inputBlock .ant-input-group .ant-input {
  height: 50px;
}
.listDetail .ant-list-item {
  padding: 2px 0;
}
</style>