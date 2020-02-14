<template>
  <div id="app">
    <head-block></head-block>
    <transition appear appear-active-class="animated fadeIn">
      <router-view></router-view>
    </transition>
    <el-image-viewer v-if="showViewer" :on-close="closeViewer" :url-list="[preview_src]" />
  </div>
</template>

<script>
import ElImageViewer from "element-ui/packages/image/src/image-viewer";

export default {
  name: "app",
  data() {
    return {};
  },
  components: { ElImageViewer }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 20px; */
}
#app {
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 1px;
}
</style>
