<template>
  <div class="uploadPage">
    <div class="leftBody">
      <leftBody></leftBody>
    </div>
    <div class="rightBody">
      <rightBody></rightBody>
    </div>
  </div>
</template>

<script>
export default {
  name: "uploadPage",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.uploadPage {
  position: relative;
  width: 100%;
  background: #f7f8fa;
  min-height: 880px;
  margin-top: 90px;
  border-top: 1px solid #e5e7e9;
}
.leftBody {
  float: left;
  box-sizing: border-box;
  padding: 20px 50px;
  min-height: 880px;
  overflow-y: auto;
  width: calc(100% - 360px);
  width: -webkit-calc(100% - 360px);
  width: -moz-calc(100% - 360px);
}
.rightBody {
  float: right;
  min-height: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
  width: 360px;
  border-left: 1px solid #eeeff2;
  background: #fff;
  padding: 0 0 32px;
}

@media screen and (max-width: 679px) {
  .leftBody {
        float: none;
    width: 100%;
    height: auto;
    overflow-y: hidden;
        min-height: auto;
  }
  .rightBody {
    position: relative;
    width: 100%;
    height: auto;
    min-height: auto;
    margin-top: 20px;
    overflow: auto;
  }
  .leftBody_block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
