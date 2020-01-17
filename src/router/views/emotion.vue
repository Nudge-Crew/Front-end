<template>
    <Layout>
        <el-row :gutter="20">
            <el-col :span="24">
                <Overview></Overview>
            </el-col>
        </el-row>
    </Layout>
</template>

<script>
    import Layout from '@layouts/main.vue'
    import Overview from '@components/emotion_overview.vue'

    export default {
        name: "emotion",
        components: { Layout, Overview },
        methods: {
            fetchItems() {
                this.$store.dispatch('emotions/fetchItems')
            },
        }
    }
</script>

<style scoped>

</style>
