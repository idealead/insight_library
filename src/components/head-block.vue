<template>
  <div class="head-block flex flexSpaceBetween">
    <a-row type="flex" align="middle" justify="space-between">
      <a-col :md="{span: 3}" :xs="{span: 7}" :push="1">
        <a href="/" class="logo">
          <img src="../assets/head/logo.png" alt />
        </a>
      </a-col>
      <a-col :md="{span: 8}" :xs="{span: 10}" class="flex flexJustifyEnd" :pull="1">
        <a-row type="flex" align="middle" justify="end">
          <a-col :md="{ span: 4 , pull: 4}" :xs="{ span: 12  , pull: 6}">
            <a href="javascript:;" class="upload_block flex" @click="toSupplyPage">
              <a-icon type="cloud-upload" style="fontSize: 25px;margin-right: 10px" />
              <span>供图</span>
            </a>
          </a-col>
          <a-col :md="{ span: 4 , pull: 2}" :xs="{ span: 12, pull: 4}">
            <div class="login_block">
              <div class="login_btn" @click="openLogin" v-show="!isLogin">
                <a-button>登录</a-button>
              </div>
              <div class="login_success flex" v-show="isLogin">
                <div @click="toAccountPage" class="flex">
                  <a-icon type="user" style="fontSize: 25px;margin-right: 10px" />
                  <span>{{userInfo.name}}</span>
                </div>
                <span class="logout" @click="logout">注销</span>
              </div>
            </div>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mapState } from "vuex"; //引入state，getters，mutations
export default {
  name: "head-block",
  data() {
    return {
      locateComponent: this.$route.name
    };
  },
  props: {},
  computed: {
    ...mapState(["isLogin"])
  },
  mounted() {},
  methods: {
    toSupplyPage: function() {
      this.$router.push({
        name: "uploadPage"
      });
    },
    toAccountPage: function() {
      this.$router.push({
        path: "/accountPage/uploadHistroy"
      });
    },
    logout() {
      this.$router.go(0);
      this.delCookie("userInfo");
      this.delCookie("isLogin");
      this.delCookie("token");
    }
  }
};
</script>

<style scoped>
.head-block {
  position: absolute;
  z-index: 50;
  top: 20px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.fix {
  position: fixed;
  background-color: #fff;
}
.ant-row-flex {
  width: 100%;
}
.ant-col-8 {
  height: 100%;
}
.logo {
  width: 100%;
  display: block;
  text-align: left;
  /* margin-left: 100px; */
}

.logo img {
  max-width: 100%;
}

.upload_block {
  font-size: 15px;
  cursor: pointer;
  color: #e60012;
  white-space: nowrap;
}

/* .login_block {
  margin-left: 60px;
} */
.login_block .ant-btn {
  color: #e60012;
  border-color: #e60012;
  background-color: transparent;
}
.login_block .ant-btn:hover {
  color: #fff;
  background-color: #e60012;
}
.login_success {
  color: #e60012;
  white-space: nowrap;
  cursor: pointer;
  font-size: 15px;
}
.logout {
  text-decoration: underline;
  margin-left: 5px;
  cursor: pointer;
  font-size: 15px;
}
</style>