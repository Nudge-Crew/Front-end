<template>
    <Layout>
        <el-row :gutter="20">
            <el-col :span="12">
               
            </el-col>
        </el-row>
    </Layout>
</template>

<script>
    import Layout from '@layouts/main.vue'

    export default {
        name: "KpiOverview",
        components: { Layout },
        data() {
            return {
                search: ''
            }
        },
        created() {
            this.$store.dispatch('kpis/fetchItems')
        },
        methods: {
            querySearch(queryString, cb) {
                cb(this.$store.dispatch('kpis/findBySearch', queryString))
            },
            handleSelect(item) {
                console.log(item)
            }
        }

    }
</script>

<style scoped>

</style>
