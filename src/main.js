import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/reset.css'
import VueYoutube from 'vue-youtube'
import VueFullscreen from 'vue-fullscreen'

Vue.config.productionTip = false
Vue.use(VueYoutube)
Vue.use(VueFullscreen)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
