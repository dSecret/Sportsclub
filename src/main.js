import Vue from 'vue'
const App =()=>import('./App.vue') 
import VueRouter from 'vue-router'
import Routes from './router.js'
import VueMaterial from 'vue-material'
import {store} from './store/store.js'
import Vuex from 'vuex'
// import 'vue-material/dist/vue-material.min.css'
import firebase from 'firebase'
import {config} from './helpers/firebaseConfig.js'




export const bus=new Vue()

Vue.use(VueRouter)
Vue.use(Vuex)

const router =new VueRouter({
  routes:Routes,
  mode:'history'
});

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
  store:store,
  created() {
// firebase.initializeApp(config);
        // this.$store.dispatch('setUser')
  },
  el: '#app',
  render: h => h(App)
});