<template>
  <el-dialog
    :visible.sync="dialogVisible"
    width="400px"
    @closed="closedFunc"
    :show-close="false"
    id="login"
    customClass="login"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(255, 255, 255, 0.5)"
  >
    <a-spin :spinning="spinning" :delay="delayTime">
    <div class="dia_login_wrap">
      <div slot="title">
        <img src="../../assets/head/logo.png" class="logo" />
      </div>
      <div class="account_box">
        <el-input placeholder="账号" v-model="user_account" class="user_account"></el-input>
        <span>@gdinsight.com</span>
      </div>
      <el-input placeholder="登录密码" v-model="user_password" class="user_password" show-password></el-input>
      <p class="login_tips">请使用因赛助手帐号登录</p>
      <div class="login_btns">
        <a-button @click="dialogVisible = false" class="cancel_btn login_btn">取消</a-button>
        <a-button type="primary" @click="login" class="confirm_btn login_btn">确定</a-button>
      </div>
    </div>
    </a-spin>
  </el-dialog>
</template>

<style type="text/css">
.login {
  border-radius: 5px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.login .dia_login_wrap {
  width: 303px;
  min-height: 360px;
  margin: 0.5rem auto 0;
}
.login .logo {
  width: 200px;
  display: block;
  margin: 0 auto 55px;
}
.el-dialog__header {
  padding: 0;
  overflow: hidden;
}
.login .el-input__inner {
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #000000;
  box-sizing: border-box;
}
.account_box .el-input__inner {
  border: none;
}
.login .el-input__inner:focus {
  border-bottom-color: #000000;
}
.user_account,
.user_password {
  font-size: 15px;
  color: #cfcfcf;
}
.account_box {
  width: 100%;
  border-bottom: 1px solid #000000;
  margin-bottom: 44px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.account_box span {
  white-space: nowrap;
  color: #cfcfcf;
}
.account_box .user_account {
  width: 60%;
  border: none;
}
.login_btns {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10%;
}
.login_btns .login_btn {
  width: 100px;
  margin: 0 5%;
}
.confirm_btn,
.confirm_btn:active,
.confirm_btn:hover,
.confirm_btn:focus {
  background-color: #e60012;
  border-color: #e60012;
}
.cancel_btn:hover {
  color: inherit;
  border-color: inherit;
}
.login_tips {
  text-align: center;
  margin: 4% auto 16%;
  font-size: 13px;
}
</style>
<style>
.v-modal {
  z-index: 100 !important;
}
</style>

<script>
import { loginByStaffAccount } from '@api/service.js'
import bus from "@/bus.js"
export default {
  data() {
    return {
      dialogVisible: false,
      user_account: "",
      user_password: "",
      spinning: false,
      delayTime: 500
    };
  },
  mounted() {
    // 绑定enter事件
    this.enterKeyup();
  },
  methods: {
    closedFunc: function() {
      let login = document.getElementById("login");
      document.body.removeChild(login);
      this.enterKeyupDestroyed(); //删除绑定
    },
    login: function() {
      // 登录
      const me = this;
      if (me.validateFunc()) {
        me.spinning = true;
        let email = this.user_account,
            password = this.user_password;
        me.fecthLogin(email, password);
      }
    },
    validateFunc: function() {
      // 检查账号密码是否为空
      if (this.user_account != "" && this.user_password != "") {
        return true;
      } else if (this.user_account != "" && this.user_password === "") {
        this.$message.warning("密码不能为空！");
        return false;
      } else if (this.user_account === "" && this.user_password != "") {
        this.$message.warning("账号不能为空！");
        return false;
      } else {
        this.$message.warning("账号和密码不能为空！");
        return false;
      }
    },
    fecthLogin(email, password) {
      const me = this;
      // 数据请求
      loginByStaffAccount(email, password)
      .then(data => {
        console.log(data)
        me.spinning = false;

        let userInfo = {
          id: data.data.id,
          name: data.data.user_name,
          sex: data.data.sex,
          department_id: data.data.dep_id,
          department_name: data.data.dep_name
        }

        me.setCookie('userInfo', JSON.stringify(userInfo))
        // me.SET_USERINFO(userInfo)
        
        bus.$emit('SET_USERINFO', userInfo)

        /********测试 ********/
        let token = 'dsjdhsahcbhhhxbhhbgdhgsh'; 
        me.setCookie('token', token)
        /********测试 ********/
        



        me.dialogVisible = false
        me.enterKeyupDestroyed(); //删除绑定
      })
      .catch(err => {
        console.log(err)
        this.$message.warning(err.message);
      })
    },
    // add enter 事件
    enterKey(event) {
      const me = this;
      const code = event.keyCode
        ? event.keyCode
        : event.which
        ? event.which
        : event.charCode;
      if (code == 13) {
        me.login();
      }
    },
    enterKeyupDestroyed() {
      document.removeEventListener("keyup", this.enterKey);
    },
    enterKeyup() {
      document.addEventListener("keyup", this.enterKey);
    }
  }
};
</script>