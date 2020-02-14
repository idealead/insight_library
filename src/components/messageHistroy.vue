<template>
  <div class="messageHistroy accountHistroy">
    <h3>消息管理</h3>
    <div class="ant_tabs">
      <a-tabs defaultActiveKey="0">
        <a-tab-pane tab="待审查素材" key="0" :forceRender="false"></a-tab-pane>
        <a-tab-pane tab="已通过素材" key="1" :forceRender="false"></a-tab-pane>
        <a-tab-pane tab="被拒绝素材" key="2" :forceRender="false"></a-tab-pane>
      </a-tabs>
    </div>
    <div class="form" style="margin-top: 16px;">
      <a-table
        :columns="columns"
        :rowKey="record => record.login.uuid"
        :dataSource="data"
        :pagination="pagination"
        :loading="loading"
        @change="handleTableChange"
      >
        <!-- <template slot="name" slot-scope="name">{{name.first}} {{name.last}}</template> -->
      </a-table>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: "序号",
    dataIndex: "index",
    key: "index",
    align: "center"
  },
  {
    title: "缩略图",
    dataIndex: "Thumbnail",
    key: "Thumbnail",
    align: "center"
  },
  {
    title: "标签",
    dataIndex: "Tag",
    key: "Tag",
    align: "center"
  },
  {
    title: "时间",
    key: "time",
    dataIndex: "time",
    align: "center"
  },
  {
    title: "备注",
    key: "reason",
    dataIndex: "reason",
    align: "center"
  }
];

export default {
  name: "messageHistroy",
  data() {
    return {
      messageTypes: [
        { id: 0, type: "待审查素材" },
        { id: 1, type: "已通过素材" },
        { id: 2, type: "被拒绝素材" }
      ],
      data: [],
      columns,
      pagination: {
        current: 1, //当前页数
        pageSize: 10, //每页数量
        total: 200 //总共数量
      },
      loading: false
    };
  },
  props: {},
  components: {},
  mounted() {
    this.fetch()
  },
  methods: {
    handleTableChange(pagination) {
      console.log(pagination);
      // const pager = { ...this.pagination };
      // pager.current = pagination.current;
      // this.pagination = pager;
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current
      });
    },
    fetch(params = {}) {
      // 测试
      console.log("params:", params);
      this.loading = true;
      this.axios({
        url: "https://randomuser.me/api",
        method: "get",
        params: {
          results: 10,
          ...params
        }
      }).then(data => {
        const pagination = { ...this.pagination };
        // Read total count from server
        // pagination.total = data.totalCount;
        console.log(data);
        pagination.total = 200;
        this.loading = false;
        this.data = data.results;
        this.pagination = pagination;
      });
    }
  }
};
</script>

<style scoped>
.messageHistroy h3 {
  font-size: 18px;
  color: #2a2a2a;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 24px;
  text-align: left;
}
</style>