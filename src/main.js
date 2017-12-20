import Vue from 'vue'
const App =()=>import('./App.vue') 
// import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './route.js'
import VueMaterial from 'vue-material'
// import {store} from './store/store.js'
// import 'vue-material/dist/vue-material.min.css'
// 
Vue.use(VueRouter)

const router =new VueRouter({
  routes:Routes,
  mode:'history'
});

Vue.use(VueMaterial)
// Vue.material.registerTheme({
//   teal: {
//     primary: {
//         color: 'lightgreen',
//         hue: 500
//     },
//     accent: {
//     color: 'grey',
//     hue: 300
//     }
//   },
//   blue: {
//     primary: {
//         color: 'blue',
//         hue: 500
//     },
//     accent: {
//     color: 'grey',
//     hue: 300
//     }
//   }
// })


new Vue({
  router,
  // store:store,
  created() {
  		// console.log(this.$store.state.name)
    //     this.$store.state.user.then(u=>{
    //     		console.log(u)
    //     })
    },
  el: '#app',
  render: h => h(App)
});