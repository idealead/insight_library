<template>
  <div class="homePage">
    <div class="search_block">
      <search></search>
    </div>
    <div class="content_block">
      <div class="intro_block">
        <intro></intro>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "@/bus.js"
export default {
  name: "homePage",
  data() {
    return {};
  },
  components: {},
  created() {
     this.busEvent()
  },
  mounted() {},
  methods: {
    busEvent() {
      const me = this;
      bus.$on("SET_USERINFO", function(data) {
        me.SET_USERINFO(data);
      });
    }
  }
};
</script>
<style scoped>
.search_block {
  position: relative;
  width: 100%;
  background-position: center;
  background-repeat: repeat-x;
  background-size: cover;
  background-color: #ced4da;
  height: 480px;
  background-image: url(../assets/kv.jpg);
}
.search_block:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  opacity: 0.2;
  z-index: 1;
}
</style>
