/*
 * @Author: hzq
 * @Date: 2018-08-28 16:10:54
 * @Last Modified by: hzq
 * @Last Modified time: 2019-07-02 20:57:12
 * @文件说明: 引入所有请求地址
 */
const needKey = false
const url = {
    Topic: ['GetCaseGroupList'],
    Login: ['Login', 'Logout'],
    User: ['GetUser', 'DelUser']
}
const axiosUrl = []
for (const key in url) {
    url[key].forEach(val => {
        const obj = {
            name: needKey ? key + val : val,
            url: `/${key}/${val}`
        }
        axiosUrl.push(obj)
    })
}

export default axiosUrl
