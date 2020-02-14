<template>
  <div class="rightBody_block">
    <div class="button_content">
      <a-button type="primary" shape="round" class="upload_btn">发布图片</a-button>
      <a-divider orientation="left"></a-divider>
    </div>
    <div class="operate_content">
      <!-- 标签分类 -->
      <div class="tags_block">
        <h2>
          标签分类
          <a-icon type="info-circle" />
        </h2>
        <div class="tag_box">
          <a-tag
            v-for="(tag, index) in tags"
            :key="index"
            :closable="true"
            :afterClose="() => handleClose(tag)"
          >{{tag}}</a-tag>
          <a-input
            v-if="tagsInputVisible"
            ref="input"
            type="text"
            size="small"
            :style="{ width: '78px' }"
            :value="tagsInputValue"
            @change="handleInputChange"
            @blur="handleInputConfirm"
            @keyup.enter="handleInputConfirm"
          />
          <a-tag v-else @click="showInput" style="background: #fff; borderStyle: dashed;">
            <a-icon type="plus" />添加标签
          </a-tag>
          <a-divider orientation="left" dashed>推荐标签</a-divider>
          <div class="intor_tags">
            <a-checkable-tag
              v-for="(intro_tag, index) in intro_tags"
              :key="index"
              @change="selectedIntroTags(index)"
            >{{intro_tag}}</a-checkable-tag>
          </div>
        </div>
      </div>
      <!-- 类型 -->
      <div class="types_block divider">
        <h2>
          类型
          <a-icon type="info-circle" />
        </h2>
        <a-radio-group @change="handleTypesChange" v-model="type" defaultValue="image">
          <a-radio value="image">图片</a-radio>
          <a-radio value="pattern">图形</a-radio>
        </a-radio-group>
      </div>
      <!-- 主题分类 -->
      <div class="themes_block divider">
        <h2>
          主题
          <a-icon type="info-circle" />
        </h2>
        <a-select
          mode="multiple"
          labelInValue
          :showArrow="true"
          style="width: 100%"
          placeholder="请选择主题..."
          @change="handleThemeChange"
          v-model="selectTheme"
        >
          <a-select-option
            v-for="(item, index) in themes_arr"
            :key="index"
            :value="item.id"
          >{{item.theme}}</a-select-option>
        </a-select>
      </div>
      <!-- 版权分类 -->
      <div class="copyright_block divider">
        <h2>
          版权保护
          <a-icon type="info-circle" />
        </h2>
        <a-radio-group
          @change="handleCopyRghtChange"
          v-model="copyRight"
          defaultValue="haveCopyRight"
        >
          <a-radio value="haveCopyRight">原创</a-radio>
          <a-radio value="withouCopyRight">非原创</a-radio>
        </a-radio-group>
        <div class="withouCopyRight" v-if="copyRight === 'withouCopyRight'">
          <h2 class="h2">
            版权来源
            <a-icon type="info-circle" />
          </h2>
          <a-radio-group
            @change="handleWithouCopyRightChange"
            v-model="withouCopyRight"
            defaultValue="clearCopyRight"
          >
            <a-radio value="clearCopyRight">清楚版权来源</a-radio>
            <a-radio value="unknown">未知版权来源</a-radio>
          </a-radio-group>
          <div class="copyRightSource" v-if="withouCopyRight === 'clearCopyRight'">
            <a-divider orientation="left" dashed>来源标注</a-divider>
            <p>版权来源链接</p>
            <a-input placeholder="输入链接" class="link_source" v-mode="link_source" />
            <p>版权主体</p>
            <a-input placeholder="输入主体名称" v-mode="link_subject" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rightBody",
  data() {
    return {
      tags: ["新年", "过节"],
      intro_tags: [
        "猫",
        "人",
        "小巷",
        "肖像",
        "魅力",
        "情人节",
        "猫",
        "人",
        "小巷",
        "肖像",
        "魅力",
        "情人节"
      ],
      tagsInputVisible: false,
      tagsInputValue: "",
      type: "image",
      themes_arr: [
        { id: "0", theme: "汽车" },
        { id: "1", theme: "保险" },
        { id: "2", theme: "飞机" },
        { id: "3", theme: "黑白" },
        { id: "4", theme: "动物" }
      ],
      selectTheme: [],
      copyRight: "haveCopyRight", //是否拥有版权
      withouCopyRight: "clearCopyRight", //版权来源
      link_source: '', //版权链接
      link_subject: '', //版权主体
    };
  },
  props: {},
  components: {},
  mounted() {},
  methods: {
    handleClose(removedTag) {
      const tags = this.tags.filter(tag => tag !== removedTag);
      console.log(tags);
      this.tags = tags;
    },

    showInput() {
      this.tagsInputVisible = true;
      this.$nextTick(function() {
        this.$refs.input.focus();
      });
    },

    handleInputChange(e) {
      this.tagsInputValue = e.target.value;
    },

    handleInputConfirm() {
      const tagsInputValue = this.tagsInputValue;
      let tags = this.tags;
      if (tagsInputValue && tags.indexOf(tagsInputValue) === -1) {
        tags = [...tags, tagsInputValue];
      }
      console.log(tags);
      Object.assign(this, {
        tags,
        tagsInputVisible: false,
        tagsInputValue: ""
      });
    },
    selectedIntroTags(index) {
      // 选择推荐的标签
      this.tags.push(this.intro_tags[index]);
      this.intro_tags.splice(index, 1);
    },
    handleTypesChange(e) {
      // 选择类型回调
      console.log(e.target.value);
    },
    handleThemeChange(value) {
      // 主题类型回调
      console.log(`Selected: ${value}`);
    },
    handleCopyRghtChange(e) {
      // 版权回调
      console.log(e);
    },
    handleWithouCopyRightChange(e) {
      // 版权信息标注回调
      console.log(e);
    }
  }
};
</script>

<style scoped>
.rightBody_block {
  padding: 24px 20px;
  position: relative;
  height: 100%;
}
.operate_content {
  position: absolute;
  top: 160px;
  height: 80%;
  overflow: auto;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 20px 60px;
}
.rightBody_block h2 {
  font-size: 16px;
  font-weight: 600;
  color: #222;
  line-height: 1.25;
  margin-bottom: 7%;
  text-align: left;
}
.tag_box,
.intor_tags {
  display: flex;
  flex-wrap: wrap;
}
.upload_btn {
  height: 48px;
  line-height: 48px;
  font-size: 18px;
  text-align: center;
  width: 312px;
  margin-top: 8%;
}
.divider {
  margin-top: 50px;
}
.copyright_block .h2 {
  margin-top: 50px;
}
.copyRightSource p {
  text-align: left;
}
.link_source {
  margin-bottom: 10px;
}

@media screen and (max-width: 679px){
  .operate_content {
    position: relative;
    top: auto;
  }
}

</style>

<style>
.rightBody_block .ant-tag {
  margin: 2%;
}
.rightBody_block .anticon-info-circle {
  color: #1890ff;
  margin-left: 3%;
}
.rightBody_block .ant-divider-inner-text {
  opacity: 0.5;
  font-size: 14px;
}
.rightBody_block .ant-tag-checkable {
  background: #fafafa;
  border: 1px solid #d9d9d9;
}
.rightBody_block .ant-radio-group {
  width: 100%;
  text-align: left;
}
/* .rightBody_block .ant-select-selection--single {
  height: 40px;
}

.rightBody_block .ant-select-selection__placeholder {
  line-height: 30px;
  height: 100%;
} */
.rightBody_block .ant-select-selection--multiple {
  /* min-height: 50px; */
}
</style>