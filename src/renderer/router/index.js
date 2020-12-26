import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login-screen',
      component: require('@/components/LoginScreen').default
    },
    {
      path: '/registration',
      name: 'registration-screen',
      component: require("@/components/RegistrationScreen").default
    },
    {
      path: '/main',
      name: 'main-screen',
      component: require("@/components/MainScreen").default
    },
    {
      path: '/music',
      name: 'music-screen',
      component: require("@/components/MusicScreen").default
    }
  ]
})
