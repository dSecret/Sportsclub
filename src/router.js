import VueRouter from 'vue-router';
const Auth=()=> import('./components/Auth.vue')


// home route
const home =()=> import('./pages/home/home.vue')
const profile =()=> import('./pages/profile/profile.vue');
	const profileHome =()=> import('./pages/profile/home/home.vue')
	const profileEvents =()=> import('./pages/profile/events/events.vue')
	const profileAbout =()=> import('./pages/profile/about/about.vue')
	const profileSettings =()=> import('./pages/profile/settings/settings.vue')


// authfunctions
import {requireauth,authenticated} from './helpers/authfunc'


const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: home },
    { path: '*', component: home },
    { path: '/login', component: Auth,beforeEnter:authenticated},
    { path: '/prot', component: Auth,beforeEnter:requireauth},
    { path: '/profile', component: profile,beforeEnter:requireauth,
	  children:[
		{path:'home',component:profileHome},
		{path:'events',component:profileEvents},
		{path:'about',component:profileAbout},
		{path:'settings',component:profileSettings},
	  ]
	},
  ]
});








export default router;