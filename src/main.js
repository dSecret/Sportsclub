import Vue from 'vue'
const App =()=>import('./App.vue') 
import VueRouter from 'vue-router'
import router from './router'
import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'

Vue.use(VueRouter)
Vue.use(VueMaterial)



new Vue({
  router,
  created() {

    },
  el: '#app',
  render: h => h(App)
});