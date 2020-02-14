import Vue from 'vue'
// import axios from 'axios'

/**
 * [loginByStaffAccount 登录接口]
 * @param  {[String]} email    [员工系统邮箱 初始化：姓名拼音@gdinsight.com]
 * @param  {[String]} password [员工系统密码 初始化：abc123]
 * @return {[type]}          [用户信息]
 */
export function loginByStaffAccount(email, password) {
    return new Promise((resolve, reject) => {         
        Vue.prototype.axios.post('/webapi/User_login/user_login', {
            email : email,
            password: password,
        })        
        .then(res => { 
            resolve(res.data);
        })        
        .catch(err => {            
            reject(err)        
        })    
    });
}