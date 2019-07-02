<template>
    <div class="container">
        <div>
            <logo />
            <el-button type="primary">按钮</el-button>
            {{ $store.state.user.hzq.age }}
        </div>
    </div>
</template>

<script>
    export default {
        created() {
            this.$api.GetCaseGroupList().then(res => {
                console.log(res.data.Data)
                setTimeout(() => {
                    this.$store.commit('save', ['user.hzq.age', 24])
                }, 1000)
            })
        }
    }
</script>

<style>
    .container {
        margin: 0 auto;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .title {
        font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
            BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
            sans-serif;
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .links {
        padding-top: 15px;
    }
</style>
