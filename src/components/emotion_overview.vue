<template>
    <el-container>
        <el-main>
            <el-row :gutter="20">
                <h1>Emotion API</h1>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="24">
                    <el-table
                            :data="kpiItems"
                            style="width: 100%">
                        <el-table-column
                                prop="kpi"
                                label="KPI"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="description"
                                label="Description"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="Address">
                        </el-table-column>
                    </el-table>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "emotion_overview",
        computed: {
            ...mapGetters('emotions', {
                kpiItems: 'getItems'
            }),
        }
    }
</script>

<style scoped>

</style>
