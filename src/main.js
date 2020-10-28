import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// import './assets/styles/reset.css'
// import 'swiper/swiper-bundle.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(MintUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
