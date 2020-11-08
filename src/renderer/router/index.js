import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login-page',
      component: require('@/components/LoginScreen').default
    },
    {
      path: '/registration',
      name: 'registration-page',
      component: require("@/components/RegistrationScreen").default
    }
  ]
})
