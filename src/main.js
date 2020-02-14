import Vue from 'vue'
import App from './App.vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import router from './router/index'
import '@api/cookie.js'
import store from './store'
import Antd from 'ant-design-vue'
import mixin from './mixin/mixin.js'
import 'ant-design-vue/dist/antd.css'
import '@img/css/common.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '@img/css/swiper.min.css';
import 'element-ui/lib/theme-chalk/index.css';
import {VueMasonryPlugin} from 'vue-masonry';
import '../src/axios/index.js'
import {Dialog , Input} from 'element-ui';
import Login from '@components/dialog/login'



Vue.config.productionTip = false

Vue.prototype.$login = Login.install

Vue.use(Antd)
Vue.use(VueMasonryPlugin)
Vue.use(VueAwesomeSwiper)
Vue.use(Dialog)
Vue.use(Input)
Vue.mixin(mixin)

const requireComponent = require.context(
  // 其组件目录的相对路径
  './components',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /\.vue$/
)

requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)

  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )

})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
