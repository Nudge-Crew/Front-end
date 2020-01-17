<template>
  <el-header>
    <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router>
      <el-menu-item index="4" :route="{ name: 'kpi_overview' }">Student Helper</el-menu-item>
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
