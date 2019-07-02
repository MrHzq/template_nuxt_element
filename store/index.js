export const state = () => ({
    state1: 'state1',
    user: { hzq: { age: 25 } }
})

export const mutations = {
    // 这是一个万能的mutations，它支持vuex的数据流，能实时变化
    // 使用方法 拿上面两个state举例：
    // 改变state1：this.$store.commit('save',['state1','newState1'])
    // 改变age：this.$store.commit('save',['user.hzq.age',24])
    save(state, [key, data]) {
        if (!key) throw new Error('mutations save need key！')
        const keyPath = key.split('.')
        const len = keyPath.length
        const lastKey = keyPath.pop()
        let needSave = state
        for (let i = 0; i < len - 1; i++) {
            needSave = needSave[keyPath[i]]
        }
        if (!needSave.hasOwnProperty(lastKey)) {
            throw new Error(`【${key}】 Error Key: ${lastKey}`)
        }
        needSave[lastKey] = data
    }
}
