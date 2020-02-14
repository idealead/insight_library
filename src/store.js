import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        showViewer: false, //显示查看器
        preview_src: "", //显示图片地址
        isLogin: Vue.prototype.getCookie('token') ? true : false, //判断是否登录
        userInfo: Vue.prototype.getCookie('userInfo') ?  JSON.parse(Vue.prototype.getCookie('userInfo')) : '' //获取用户信息
    },
    mutations: {
        SET_SHOWVIEWER: (state, boolean) => {
            // 设置showViewer
            state.showViewer = boolean
        },
        SET_PREVIEW_SRC: (state, path) => {
            // 设置preview_src
            state.preview_src = path
        },
        SET_USERINFO: (state, obj) => {
            // 登录成功时设置用户信息
            state.userInfo = obj;
            state.isLogin = true;
        }
    }
})

export default store