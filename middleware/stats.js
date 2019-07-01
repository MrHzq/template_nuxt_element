export default function(context) {
    // 获取userAgent
    context.userAgent = process.server
        ? context.req.headers['user-agent']
        : navigator.userAgent
    const ua = context.userAgent
    // 是否为手机端
    const mobile = /(Android|webOS|iPhone|iPad|iPod|tablet|BlackBerry|Mobile)/i.test(
        ua
    )
    // 是否为微信浏览器
    const wx = /MicroMessenger/i.test(ua)
    // 将值赋给context
    context.isMobile = mobile
    context.isWx = wx
    console.log('中间件，mobile：', mobile)
    console.log('中间件，wx：', wx)
    if (mobile) {
        // 当为手机端，do something
        context.redirect(302, 'https://m.baidu.com')
        // redirect：跳转到外部
        // $router.push：内部跳转
        context.$router.push('/home')
    }
}
