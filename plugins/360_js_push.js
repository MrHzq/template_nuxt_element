export default ({ app: { router } }) => {
    router.afterEach(() => {
        try {
            const isHttp = document.location.protocol === 'http:'
            const scripts = document.getElementsByTagName('script')
            const links = document.getElementsByTagName('link')
            const s = links[0]

            const newwrite = str => {
                const qhres = document.createElement('script')
                qhres.setAttribute('id', 'qhres')
                qhres.setAttribute('charset', 'UTF-8')
                qhres.src = str.split('src="')[1].split('"></script>')[0]
                const curr = [...scripts].find(s => s.id === 'qhres')
                if (curr) s.parentNode.removeChild(curr)
                s.parentNode.insertBefore(qhres, s)
            }
            document.write = newwrite

            const passport = document.createElement('script')
            passport.setAttribute('id', 'sozz')
            passport.setAttribute('charset', 'UTF-8')
            passport.src = isHttp
                ? 'http://js.passport.qihucdn.com/11.0.1.js?7090799c386233a95481f3253f0398c6'
                : 'https://jspassport.ssl.qhimg.com/11.0.1.js?7090799c386233a95481f3253f0398c6'
            const curr = [...scripts].find(s => s.id === 'sozz')
            if (curr) s.parentNode.removeChild(curr)
            s.parentNode.insertBefore(passport, s)
        } catch (e) {}
    })
}
