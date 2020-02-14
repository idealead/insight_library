import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '@views/homePage'
import searchLists from '@views/searchLists'
import uploadPage from '@views/uploadPage'
import accountPage from '@views/accountPage'
import listDetail from '@views/listDetailPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'homePage',
    component: homePage
  },
  {
    path: '/searchLists',
    name: 'searchLists',
    component: searchLists
  },
  {
    path: '/listDetail',
    name: 'listDetail',
    component: listDetail
  },
  {
    path: '/uploadPage',
    name: 'uploadPage',
    component: uploadPage,
    beforeEnter: (to, from, next) => {
      let token = Vue.prototype.getCookie('token');
      if (token === 'null' || token === '') {
        if (to.path == '/') {
          next()
        } else {
          Vue.prototype.$message.warning('请先登录！');
          // next('/')
        }
      } else {
        next();

      }
    }
  },
  {
    path: '/accountPage',
    name: 'accountPage',
    component: accountPage,
    children: [
      {
        path: '/accountPage/uploadHistroy',
        name: 'uploadHistroy',
        keepAlive: true,
        component: (resolve) => require(['@/components/uploadHistroy.vue'], resolve),
      },
      {
        path: '/accountPage/messageHistroy',
        name: 'messageHistroy',
        keepAlive: true,
        component: (resolve) => require(['@/components/messageHistroy.vue'], resolve),
      },
      {
        path: '/accountPage/downloadHistroy',
        name: 'downloadHistroy',
        keepAlive: true,
        component: (resolve) => require(['@/components/downloadHistroy.vue'], resolve),
      },
    ],
    beforeEnter: (to, from, next) => {
      let token = Vue.prototype.getCookie('token');
      if (token === 'null' || token === '') {
        if (to.path == '/') {
          next()
        } else {
          Vue.prototype.$message.warning('请先登录！');
          // next('/')
        }
      } else {
        next();

      }
    }
  },
]

const router = new VueRouter({
  mode: 'hash',
  // 如果路由存在二级目录，需要添加 base 属性，否则默认为 "/"
  // 默认路由模式是 hash 模式，会携带 # 标记，与真实 url 不符，可以改为 history 模式
  // base: process.env.BASE_URL,
  // 页面组件没有进行按需加载，可以使用 require.ensure() 来进行优化
  routes
})

export default router