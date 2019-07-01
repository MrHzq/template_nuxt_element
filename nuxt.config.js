export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        script: [
            {
                src:
                    'https://cdn.staticfile.org/echarts/4.2.1-rc1/echarts.min.js'
            },
            {
                src:
                    'https://cdn.staticfile.org/clipboard.js/2.0.4/clipboard.min.js'
            }
        ]
    },

    /*
     ** router
     */
    router: {
        // 路由中间件
        middleware: 'stats',
        extendRoutes(routes) {
            // 捕获未知路由，然后统一跳转到根路由
            routes.push({
                path: '*',
                redirect: '/'
            })
        },
        scrollBehavior() {
            // 路由跳转，滚动条置顶
            return { x: 0, y: 0 }
        }
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: ['element-ui/lib/theme-chalk/index.css'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['@/plugins/element-ui'],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/eslint-module',
        // 新增的 @nuxtjs/style-resources
        '@nuxtjs/style-resources'
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},

    /*
     ** styleResources
     */
    styleResources: {
        scss: ['@/assets/style/app.scss']
    },

    /*
     ** Build configuration
     */
    build: {
        // 提取css
        extractCSS: true,
        transpile: [/^element-ui/],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    },

    /*
     ** env
     */
    env: {
        PATH_TYPE: process.env.PATH_TYPE || 'test',
        PATH_HOST: process.env.PATH_HOST || '1'
    }
}
