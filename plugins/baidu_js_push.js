export default ({ app: { router } }) => {
    router.afterEach(() => {
        try {
            const bp = document.createElement('script')
            bp.setAttribute('id', 'baidu_js_push')
            const curProtocol = window.location.protocol.split(':')[0]
            if (curProtocol === 'https') {
                bp.src = 'https://zz.bdstatic.com/linksubmit/push.js'
            } else {
                bp.src = 'http://push.zhanzhang.baidu.com/push.js'
            }
            const scripts = document.getElementsByTagName('script')
            const links = document.getElementsByTagName('link')
            const s = links[0]
            const curr = [...scripts].find(s => s.id === 'baidu_js_push')
            if (curr) s.parentNode.removeChild(curr)
            s.parentNode.insertBefore(bp, s)
        } catch (e) {}
    })
}
