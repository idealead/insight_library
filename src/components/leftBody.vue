<template>
  <div class="leftBody_block">
    <div class="UploadLists">
      <div class="Uploadlist" :class="{'selected' : selectdIndex === index}" v-for="(item, index) in fileList" :key="index" @click="selectedStatus(index)">
        <a-icon type="close" @click="handleDelete(index)"/>
        <div class="overlay"><a-icon type="check-circle" /></div>
        <img :src="item.thumbUrl || item.url" :alt="item.name" />
      </div>
    </div>
    <a-upload
      action="//jsonplaceholder.typicode.com/posts/"
      listType="picture-card"
      :fileList="fileList"
      @change="handleChange"
      multiple
    >
      <div>
        <a-icon type="plus" />
        <div class="ant-upload-text">选择图片</div>
      </div>
    </a-upload>
  </div>
</template>

<script>
//
//
export default {
  name: "leftBody",
  data() {
    return {
      fileList: [
        {
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }
      ],
      selectdIndex: 0
    };
  },
  props: {},
  components: {},
  mounted() {},
  methods: {
    handleCancel() {
      this.previewVisible = false;
    },
    handleChange({fileList}) {
      this.fileList = fileList;
    },
    handleDelete(index) {
      this.fileList.splice(index,1)
    },
    selectedStatus(index) {
      // 选中函数
      this.selectdIndex = index ;
      /**
       * do sth
       */
    }
  }
};
</script>

<style scoped>
.ant-upload-text {
  font-size: 17px;
  margin-top: 3px;
}
.Uploadlist {
  width: 200px;
  height: 200px;
  float: left;
  margin: 0 1% 1%;
  border: 1px solid #e2e1e1;
  cursor: pointer;
  position: relative;
}
.overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: none;
}
.Uploadlist.selected .overlay{
  border: 3px solid #0099e5;
  display: block
}
.Uploadlist img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.Uploadlist:after {
    content: '';
    display: block;
    position: absolute;
    height: 40px;
    top: 0;
    left: 0;
    right: 0;
    opacity: 0;
    z-index: 1;
    transition: all 200ms ease;
    background: linear-gradient(180deg,rgba(0,0,0,.6) 0,transparent);
}
.Uploadlist:hover:after {
  opacity: 1;
}

@media screen and (max-width: 679px){
  .UploadLists {
    margin-bottom: 5%;
  }
  .Uploadlist {
    margin: 5% auto;
    float: none;
  }
}

</style>

<style >
.leftBody_block
  .ant-upload-list-picture-card
  .ant-upload-list-item-info::before {
  left: 0;
}
.leftBody_block .ant-upload-list-item-info > span {
  height: 100%;
}
.leftBody_block .ant-upload-list-picture-card .ant-upload-list-item-thumbnail,
.leftBody_block
  .ant-upload-list-picture-card
  .ant-upload-list-item-thumbnail
  img {
  object-fit: contain;
}
.leftBody_block .ant-upload.ant-upload-select-picture-card {
  width: 200px;
  height: 200px;
  margin: 0 1% 1%;
}
.leftBody_block .anticon {
  opacity: 0.6;
  font-size: 20px;
}
.leftBody_block .ant-upload-list-picture-card .ant-upload-list-item {
  width: 200px;
  height: 200px;
}
.leftBody_block
  .ant-upload-list-picture-card
  .ant-upload-list-item-actions
  .anticon-eye-o,
.leftBody_block
  .ant-upload-list-picture-card
  .ant-upload-list-item-actions
  .anticon-delete {
  font-size: 20px;
}
/* .leftBody_block .ant-upload-list-picture .ant-upload-list-item-error,
.leftBody_block .ant-upload-list-picture-card .ant-upload-list-item-error {
  border: 1px solid #e2e1e1;
} */

/* .ant-upload-list-picture-card .ant-upload-list-item-actions {
  display: none
}
.ant-upload-list-picture-card .ant-upload-list-item-info::before {
  display: none
} */

.leftBody_block .ant-upload-list {display: none}

.Uploadlist .anticon-close{
  position: absolute;
  right: 5%;
  top: 5%;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  z-index: 2;
  opacity: 0;
  transform: translateY(-50px);
  transition: all 200ms ease
}
.Uploadlist:hover .anticon-close {
  transform: translateY(0);
  opacity: 1;
}
.Uploadlist .anticon-check-circle {
    right: -6%;
    position: absolute;
    bottom: -5%;
    background: #3bade5;
    color: #fff;
    border-radius: 50%;
    opacity: 1;
    font-size: 30px;
}



</style>