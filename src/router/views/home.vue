<template>
  <Layout>
    <h1>Home Page</h1>
    <img src="@assets/images/logo.png" alt="Logo" />
    Environmental Variable: {{ apiUrl }}
  </Layout>
</template>

<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main.vue'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  data() {
    return {
      apiUrl: ''
    }
  },
  components: { Layout },
  created() {
    console.log(process.env.VUE_APP_API_BASE_URL)
    this.apiUrl = process.env.VUE_APP_API_BASE_URL
    this.$store.dispatch('kpis/fetchItems')
  }
}
</script>


