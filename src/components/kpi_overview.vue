<template>
    <el-container>
        <el-main>
            <el-row :gutter="20">
                <h1>Asking Help For:</h1>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="24">
                    <el-table
                            :data="kpiItems"
                            style="width: 100%">
                        <el-table-column
                                prop="kpi"
                                label="KPI"
                         >
                        </el-table-column>
                        <el-table-column
                                prop="description"
                                label="Description"
                        >
                        </el-table-column>
                        <el-table-column label="Actions" >
                            <template slot-scope="scope">
                                <el-button type="info" @click="dialog(scope.row)">Show Experts</el-button>
                            </template>
                        </el-table-column>
                        <template slot="empty">
                            Geen Data
                        </template>
                    </el-table>
                </el-col>
                <el-dialog
                        title="Student Experts"
                        :visible.sync="dialogVisible"
                        width="30%">
                    <el-row>
                        <el-col :span="24">
                            <el-alert
                                    title="Luuk van den Berg has knowledge of Machine Learning"
                                    type="success"
                                    :closable="false"
                                    show-icon>
                            </el-alert>
                            <br>
                            <el-alert
                                    title="Kevin Frambach may have knowledge of Machine Learning"
                                    type="warning"
                                    :closable="false"
                                    show-icon>
                            </el-alert>
                        </el-col>
                    </el-row>
                    <span slot="footer" class="dialog-footer">
                        <el-button type="primary" @click="dialogVisible = false">Sluiten</el-button>
                      </span>
                </el-dialog>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "kpi_overview",
        data() {
          return {
              dialogVisible: false,
              selected: null
          }
        },
        computed: {
            ...mapGetters('kpis', {
                kpiItems: 'getItems'
            }),
        },
        methods: {
            dialog(value) {
                this.dialogVisible = true
                this.selected = value
            },
        }
    }
</script>

<style scoped>

</style>
