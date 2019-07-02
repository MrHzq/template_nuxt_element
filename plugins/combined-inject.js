import Vue from 'vue'
// 引入接口地址
import apiUrl from '@/apiurl'

// ================全局Vue变量================
// 全局api对象
Vue.prototype.$api = {}

// 全局user对象
Vue.prototype.$user = { name: 'hzq', age: 25 }

// ================全局Vue方法================
// 深拷贝对象方法
Vue.prototype.$copy = obj => JSON.parse(JSON.stringify(obj))

// 是否为测试环境
const isTest = process.env.PATH_TYPE === 'test'
const Host = process.env.PATH_HOST === '1' ? 'lppoll.com' : 'lpoll.cn'

// 手机官网域名
const mbHost = isTest ? `http://m.${Host}.linshibin.com` : `https://m.${Host}`

// 该数组用于装自定义的 Vue.prototype 变量，要去掉 $
const arr = ['user', 'api', 'copy']

export default (c, inject) => {
    // 接口访问地址
    const apiurl = mbHost.replace('//m.', '//www.') + '/api'
    // 封装处理axios
    apiUrl.map(a => {
        const methods = a.methods || 'post'
        Vue.prototype.$api[a.name] = (params = {}, headers = {}) => {
            if (methods === 'get') params = { params }
            return c.$axios[methods](apiurl + a.url, params, {
                headers
            })
        }
    })

    // 通过循环arr，可以同时注入在context，Vue实例中，并且系统会自动将$添加到方法名的前面
    // 然后就可以这样访问：context.app.$user、this.$user
    arr.map(val => inject(val, Vue.prototype['$' + val]))
}
