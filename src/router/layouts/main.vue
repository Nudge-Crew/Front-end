<script>
import NavBar from '@components/nav-bar.vue'

export default {
  components: { NavBar },
}
</script>

<template>
  <el-container>
    <NavBar></NavBar>
    <el-main>
      <slot />
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<style lang="scss" module>

</style>
