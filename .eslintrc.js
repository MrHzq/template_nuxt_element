module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
    // add your custom rules here
    rules: {
        // 四个空格
        indent: [0, 4, { SwitchCase: 1 }],
        // 开启console
        'no-console': 'off',
        // function后面不加空格
        'space-before-function-paren': [2, 'never']
    }
}
