<template>
  <div class="accountPage">
    <div class="account_menu_container">
      <div class="menu-heading">
        <div class="avatar">
          <img src="//goss.cfp.cn/static/img/icon-header.svg" alt />
          <div class="account_info">
            账号:
            <br />
            <span>{{userInfo.name}}</span>
          </div>
          <div class="menu-links">
            <div class="menu-links-center">
              <span>账户中心</span>
              <ul>
                <li
                  v-for="(item, index) in menus"
                  :key="index"
                  :class="{'active' :activeIndex === index}"
                  @click="activeIndex = index"
                >
                  <router-link :to="{name: item.link}">{{item.text}}</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="account_info_container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "accountPage",
  data() {
    return {
      menus: [
        { text: "我的上传", link: "uploadHistroy" },
        { text: "消息管理", link: "messageHistroy" },
        { text: "我的下载", link: "downloadHistroy" }
      ],
      activeIndex: 0
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
  beforeRouteEnter(to, from, next) {
    next(vm => {
      const router = vm.$route.name;
      switch (router) {
        case "uploadHistroy":
          vm.activeIndex = 0;
          break;
        case "messageHistroy":
          vm.activeIndex = 1;
          break;
        case "downloadHistroy":
          vm.activeIndex = 2;
          break;
        default:
          vm.activeIndex = 0;
      }
    });
  }
};
</script>
<style scoped>
.accountPage {
  position: relative;
  width: 100%;
  background: #f7f7f7;
  min-height: 880px;
  margin-top: 90px;
  border-top: 1px solid #e5e7e9;
  padding-top: 10px;
  display: flex;
}
.account_menu_container {
  width: 160px;
  padding: 24px 12px;
  background: #fff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.06);
}
.account_menu_container .menu-heading .avatar {
  text-align: center;
}
.menu-heading .avatar img {
  display: block;
  width: 56px;
  height: 56px;
  margin: 0 auto;
}
.account_info {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: #333;
  line-height: 16px;
  margin-top: 8px;
}
.menu-links {
  margin-top: 32px;
}
.menu-links-center span {
  padding-left: 20px;
  font-size: 12px;
  color: #bbb;
  line-height: 12px;
  margin-bottom: 20px;
  display: block;
  text-align: left;
}
.menu-links-center ul {
  padding-left: 0;
  list-style-type: none;
  margin-bottom: 18px;
  margin-top: 10px;
}
.menu-links-center ul li {
  width: 136px;
  height: 36px;
  line-height: 36px;
  color: #333;
  border-radius: 4px;
  font-size: 14px;
  /* padding-left: 20px; */
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
}
.menu-links-center ul li a {
  color: #333;
  transition: none;
  width: 100%;
  text-align: center;
}
.menu-links-center ul li.active,
.menu-links-center ul li:hover {
  background: #4a90e2;
  color: #fff;
  border-radius: 4px;
}
.menu-links-center ul li.active a,
.menu-links-center ul li:hover a {
  color: #fff;
}
.account_info_container {
  padding: 11px 24px 29px 17px;
  flex: 1;
}

/*  */
.accountHistroy {
  width: 100%;
  height: 100%;
  position: relative;
}

@media screen and (max-width: 697px){
  .accountPage {
    flex-direction: column
  }
    .account_menu_container {
      width: 100%
    }
    .menu-links-center ul {
      display: flex
    }
}
</style>
