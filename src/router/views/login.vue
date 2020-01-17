<template>
  <Layout>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Access Token">
        <el-input type="password" autocomplete="off" v-model="form.access_token"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Save Access Token</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </Layout>
</template>

<script>
import Layout from '@layouts/main.vue'
import { authMethods } from '@state/helpers'
import appConfig from '@src/app.config'

export default {
  page: {
    title: 'Log in',
    meta: [{ name: 'description', content: `Log in to ${appConfig.title}` }],
  },
  components: { Layout },
  data() {
    return {
      form: {
        access_token: null
      },
      authError: null,
      tryingToLogIn: false,
    }
  },
  methods: {
    ...authMethods,
    // Try to log the user in with the username
    // and password they provided.
    onSubmit() {
      this.tryingToLogIn = true
      // Reset the authError if it existed.
      this.authError = null
      return this.logIn({
        access_token: this.form.access_token
      })
        .then((token) => {
          this.tryingToLogIn = false

          // Redirect to the originally requested page, or to the home page
          this.$router.push(this.$route.query.redirectFrom || { name: 'home' })
        })
        .catch((error) => {
          this.tryingToLogIn = false
          this.authError = error
        })
    },
  },
}
</script>



<style lang="scss" module>

</style>
