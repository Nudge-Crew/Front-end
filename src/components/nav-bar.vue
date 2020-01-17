<template>
  <el-header>
    <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router>
      <el-submenu index="2">
        <template slot="title">Student Helper</template>
        <el-menu-item index="2-1" :route="{ name: 'kpi_overview' }">Overview</el-menu-item>
        <el-menu-item index="2-2" :route="{ name: 'student_kpi' }">KPI</el-menu-item>
        <el-menu-item index="2-3" :route="{ name: 'student_cpi' }">CPI</el-menu-item>
      </el-submenu>
      <el-menu-item index="4" :route="{ name: 'emotion' }">Emotion API</el-menu-item>
      <el-menu-item index="5" :route="{ name: 'login' }">Access Token</el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {

  },
}
</script>

<style lang="scss" module>

</style>
