import Vue from 'vue'
import axios from 'axios'

//将axios挂载在Vue扩展上
Vue.prototype.axios=axios

 // 环境的切换
 if (process.env.NODE_ENV == 'development') {    
    axios.defaults.baseURL = '/api';
} else if (process.env.NODE_ENV == 'debug') {    
    axios.defaults.baseURL = '';
} else if (process.env.NODE_ENV == 'production') {    
    axios.defaults.baseURL = '';
}