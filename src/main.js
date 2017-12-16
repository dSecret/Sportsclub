import Vue from 'vue'
const App =()=>import('./App.vue') 
import VueRouter from 'vue-router'
import router from './router'
import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'

Vue.use(VueRouter)
Vue.use(VueMaterial)
Vue.material.registerTheme({
  teal: {
    primary: {
        color: 'lightgreen',
        hue: 500
    },
    accent: {
    color: 'grey',
    hue: 300
    }
  },
  blue: {
    primary: {
        color: 'blue',
        hue: 500
    },
    accent: {
    color: 'grey',
    hue: 300
    }
  }
})


new Vue({
  router,
  created() {

    },
  el: '#app',
  render: h => h(App)
});