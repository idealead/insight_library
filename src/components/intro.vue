<template>
  <div class="intro">
    <div class="intro_tab">
      <a-tabs defaultActiveKey="1" size="large">
        <a-tab-pane tab="推荐" key="1">
          <div class="intro_content">
            <!-- 主题轮播 -->
            <div class="inspirate_block">
              <div class="inspirate_tt">
                <h2 class="tt_1">主题推荐</h2>
                <span>探索最受欢迎的新鲜图集，发现美丽的图片，用于您的项目。</span>
              </div>
              <div class="inspirate_roll">
                <swiper :options="swiperOption">
                  <swiper-slide v-for="(item, index) in swiperData" :key="index">
                    <a
                      href="/"
                      target="_blank"
                      :style="{'background-image': 'url('+ item.path + ')'}"
                    >
                      <span>{{item.tag}}</span>
                    </a>
                  </swiper-slide>
                  <div class="swiper-button-prev inspirate_prev" slot="button-prev">
                    <a-icon type="arrow-left" />
                  </div>
                  <div class="swiper-button-next inspirate_next" slot="button-next">
                    <a-icon type="arrow-right" />
                  </div>
                </swiper>
              </div>
            </div>
            <!-- 素材推荐 -->
            <div class="material_block">
              <div class="inspirate_tt">
                <h2 class="tt_1">灵感推荐</h2>
              </div>
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
                    </a-tooltip>-->
                    <a-tooltip title="查看大图" @click="onPreview(item.img)">
                      <span class="zoom">
                        <a-icon type="zoom-in" />
                      </span>
                    </a-tooltip>
                    <a-tooltip title="素材下载" @click="downs(item.img,true)">
                      <span class="download">
                        <a-icon type="download" />
                      </span>
                    </a-tooltip>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "@img/css/item.css";
export default {
  name: "intro",
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        centeredSlides: true,
        // spaceBetween: 20,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperData: [
        { path: require("@img/roll1.jpg"), tag: "远程教育" },
        { path: require("@img/roll2.jpg"), tag: "医疗科研" },
        { path: require("@img/roll3.jpg"), tag: "果蔬美食" },
        { path: require("@img/roll4.jpg"), tag: "温暖亲情" }
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
  props: {},
  components: {
    swiper,
    swiperSlide
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.intro {
  position: relative;
}
.intro:after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  top: 54px;
  border-bottom: 1px solid #e8e8e8;
}
.intro_tab {
  max-width: 1280px;
  margin: 0 auto;
}
.intro_content {
  margin: 0 -10px;
}
/* .m_item {
  width: 32%;
  overflow: hidden;
  border-radius: 10px;
  margin: 0.5%;
  cursor: pointer;
  position: relative;
}
.m_item img {
  -webkit-transition: all ease-in-out 300ms;
  -o-transition: all ease-in-out 300ms;
  transition: all ease-in-out 300ms;
}
.m_item:hover img {
  transform: scale(1.1);
}
.m_item:hover::before {
  background-color: rgba(0, 0, 0, 0.25);
}

.m_item::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  background-color: transparent;
  -webkit-transition: all ease-in-out 180ms;
  -o-transition: all ease-in-out 180ms;
  transition: all ease-in-out 180ms;
}
.m_item .components {
  position: absolute;
  z-index: 5;
  bottom: 5%;
  left: 6%;
  opacity: 0;
}
.m_item:hover .components {
  animation: fadeInLeft .4s ease both;
}
.m_item .components span {
    color: #fff;
    font-size: 20px;
    font-weight: bolder;
    width: 32px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 2px;
    margin: 0 4px 4px 0;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.m_item .components span:hover {
  color: #000;
  background: rgba(255, 255, 255, 0.5);
} */

/* .swiper-slide */
.inspirate_roll {
  height: 250px;
}
.inspirate_tt {
  display: flex;
  padding: 0 24px;
  margin-bottom: 2%;
}
.material_block .inspirate_tt {
  margin: 3% 0 1%;
}
.inspirate_tt span {
  font-size: 14px;
  color: #666;
  line-height: 22px;
  margin: 8px 0 0 0;
}
.inspirate_tt .tt_1 {
  font-size: 24px;
  color: #080808;
  font-weight: 600;
  line-height: 32px;
  margin: 0 16px 0 0;
}
.swiper-container {
  height: 100%;
}
.swiper-slide {
  width: 32% !important;
  margin-left: 1.2%;
  height: 100%;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}
.swiper-slide a {
  width: 100%;
  height: 100%;
  font-size: 18px;
  line-height: 25px;
  color: #fff;
  display: block;
  position: relative;
  background-color: #d0d0d0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.swiper-slide a span {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.swiper-slide a:hover::before {
  background-color: transparent;
}

.swiper-slide a::before {
  content: "";
  display: block;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  -webkit-transition: all ease-in-out 180ms;
  -o-transition: all ease-in-out 180ms;
  transition: all ease-in-out 180ms;
}

.inspirate_prev,
.inspirate_next {
  width: 46px;
  height: 46px;
  background-color: #fff;
  color: #f84949;
  font-size: 18px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 1;
  -webkit-box-shadow: 0 5px 10px 0 rgba(32, 35, 41, 0.09);
  box-shadow: 0 5px 10px 0 rgba(32, 35, 41, 0.09);
  -webkit-transition: all ease-in-out 180ms;
  -o-transition: all ease-in-out 180ms;
  transition: all ease-in-out 180ms;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  background-image: none;
}
.inspirate_prev {
  margin-left: 2%;
}
.inspirate_next {
  margin-right: 2%;
}
.inspirate_prev:hover,
.inspirate_next:hover {
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.21);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.21);
}
@media screen and (max-width: 1328px) {
  .intro_tab {
    padding: 0 30px;
  }
}

@media screen and (max-width: 850px) {
  .intro_tab {
    padding: 0 16px;
  }
}
@media screen and (max-width: 500px) {
  .m_item {
    width: 90%;
    right: 0;
    margin: 2% auto;
  }
  .inspirate_tt {
    flex-direction: column;
    text-align: left;
  }
}
</style>
  
<style>
.intro .ant-tabs-nav-scroll {
  text-align: left;
}
.intro .ant-tabs-bar {
  margin: 0 0 3%;
  border: none;
}
.intro .ant-tabs-nav .ant-tabs-tab-active {
  color: #666;
}
.intro .ant-tabs-nav .ant-tabs-tab-active:hover {
  color: #f84949;
}
.intro .ant-tabs-ink-bar {
  background-color: #f84949;
  height: 5px;
}
</style>
<style scoped>
@keyframes fadeInLeft {
  0% {
    transform: translateX(-14px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>