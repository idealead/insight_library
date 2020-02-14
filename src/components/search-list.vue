<template>
  <div class="searchList">
    <div class="filter flex flexJustifyStart">
      <div
        class="image_box filter_box flex"
        :class="{'active' : img_type == 'image'}"
        @click="changeTag('image')"
      >
        <a-icon type="picture" style="font-size: 20px;" />
        <span>图片</span>
      </div>
      <div
        class="pattern_box filter_box flex"
        :class="{'active' : img_type === 'pattern'}"
        @click="changeTag('pattern')"
      >
        <a-icon type="border" style="font-size: 20px;" />
        <span>图形</span>
      </div>
    </div>
    <div class="resultLists">
      <div class="search_tags flex">
        <h2>春节</h2>
        <span>{{filter_type_cn}}</span>
      </div>
      <div class="similar_tags flex flexJustifyStart">
        <a-tag v-for="(item, index) in similar_tags" :key="index">{{item}}</a-tag>
      </div>
      <div class="filter_theme flex">
        <a-checkbox v-for="(item, index) in theme_tags" :key="index">{{item.theme_tag}}</a-checkbox>
      </div>
      <div class="search_result">
        <div v-masonry transition-duration="0.3s" item-selector=".m_item">
          <div v-masonry-tile class="m_item" v-for="(item, index) in material" :key="index">
            <div class="overlay">
              <router-link :to="{path:'/listDetail', query: {id: item.id}}" target="_blank"></router-link>
            </div>
            <img :src="item.img" alt />
            <div class="components flex">
              <!-- <a-tooltip title="素材信息">
                <span class="info">
                  <a-icon type="info-circle" />
                </span>
              </a-tooltip> -->
              <a-tooltip title="查看大图">
                <span class="zoom" @click="onPreview(item.img)">
                  <a-icon type="zoom-in" />
                </span>
              </a-tooltip>
              <a-tooltip title="素材下载">
                <span class="download" @click="downs(item.img,true)">
                  <a-icon type="download" />
                </span>
              </a-tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@img/css/item.css";

export default {
  name: "searchList",
  data() {
    return {
      filter_type: "image",
      similar_tags: [
        "春节 街道",
        "春节 电影",
        "春节 加油",
        "春节 街道",
        "春节 电影",
        "春节 加油"
      ],
      theme_tags: [
        { id: "0", theme_tag: "汽车" },
        { id: "1", theme_tag: "金融" },
        { id: "2", theme_tag: "新春" },
        { id: "3", theme_tag: "模特" },
        { id: "4", theme_tag: "人物" },
        { id: "4", theme_tag: "人物" },
        { id: "4", theme_tag: "人物" },
        { id: "4", theme_tag: "人物" },
        { id: "4", theme_tag: "人物" },
        { id: "4", theme_tag: "人物" },
        { id: "4", theme_tag: "人物" }
      ],
      material: [
        {
          id: 0,
          img: require("@img/pic1.jpg")
        },
        {
          id: 1,
          img: require("@img/pic2.jpg")
        },
        {
          id: 2,
          img: require("@img/pic3.jpg")
        },
        {
          id: 3,
          img: require("@img/pic1.jpg")
        },
        {
          id: 4,
          img: require("@img/pic2.jpg")
        },
        {
          id: 5,
          img: require("@img/pic3.jpg")
        },
        {
          id: 6,
          img: require("@img/pic2.jpg")
        },
        {
          id: 7,
          img: require("@img/pic1.jpg")
        },
        {
          id: 8,
          img: require("@img/pic1.jpg")
        },
        {
          id: 9,
          img: require("@img/pic2.jpg")
        },
        {
          id: 10,
          img: require("@img/pic3.jpg")
        },
        {
          id: 11,
          img: require("@img/pic1.jpg")
        },
        {
          id: 12,
          img: require("@img/pic2.jpg")
        },
        {
          id: 13,
          img: require("@img/pic3.jpg")
        }
      ]
    };
  },
  props: ['img_type'],
  computed: {
    filter_type_cn: function() {
      if (this.img_type == "image") {
        return "图片";
      } else {
        return "图形";
      }
    }
  },
  mounted() {},
  methods: {
    changeTag: function(type) {
      //   切换类型
      this.$set(this, "img_type", type);
    }
  }
};
</script>

<style scoped>
.filter {
  padding: 0 20%;
  height: 70px;
  border: 1px solid #e5e5e5;
}
.filter_box {
  font-size: 15px;
  cursor: pointer;
  opacity: 0.5;
  position: relative;
  transition: all 200ms ease;
}
.filter_box.active {
  opacity: 1;
}
.filter_box:hover {
  opacity: 1;
}
.filter_box.active:after {
  content: "";
  width: 100%;
  height: 2px;
  display: block;
  background-color: #f84949;
  position: absolute;
  left: -3%;
  bottom: -6px;
}
.filter_box span {
  margin-left: 5px;
  white-space: nowrap;
}
.pattern_box {
  margin-left: 40px;
}
.resultLists {
  background: #f4f4f4;
  min-height: 1000px;
  width: 100%;
  padding: 20px 50px;
}
.search_tags h2,
.search_tags span {
  font-size: 18px;
  color: #111111;
}
.search_tags h2 {
  margin: 0;
}
.search_tags span {
  margin-left: 10px;
}

.similar_tags {
  margin: 25px 0;
  flex-wrap: wrap;
}
.filter_theme {
  width: 100%;
  background: #fff;
  min-height: 50px;
  border-radius: 5px;
  padding-left: 20px;
  flex-wrap: wrap;
}
.filter_theme label {
  border-right: 1px solid #d0d0d0;
  margin: 8px 0 8px 8px;
  font-size: 15px;
  white-space: nowrap;
}

.search_result {
  margin-top: 20px;
}

.m_item {
  width: 19%;
}

@media screen and (max-width: 800px) {
  .filter {
    padding: 0 6%;
  }
}
@media screen and (max-width: 500px) {
  .input_block {
    width: 95%;
    margin-top: 22%;
  }
  .resultLists {
    padding: 20px 15px;
  }
  .similar_tags {
    margin: 15px 0;
  }
  /* .m_item {
    width: 99%;
    right: 0;
    margin: 2% auto;
} */
}
</style>

<style>
.resultLists .ant-tag {
  height: 30px;
  line-height: 30px;
}
.resultLists .ant-checkbox-checked .ant-checkbox-inner {
  background-color: #f84949;
  border-color: #f84949;
}
.resultLists .ant-checkbox-checked::after,
.resultLists .ant-checkbox:hover .ant-checkbox-inner,
.ant-checkbox-wrapper:hover .ant-checkbox-inner {
  border: 1px solid #f84949;
}
</style>