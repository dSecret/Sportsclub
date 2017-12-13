import VueRouter from 'vue-router';
const Auth=()=> import('./components/Auth.vue')


// home route
const home =()=> import('./pages/home/home.vue')
const profile =()=> import('./pages/profile/profile.vue');
	const profileHome =()=> import('./pages/profile/home/home.vue')
	const profileEvents =()=> import('./pages/profile/events/events.vue')
	const profileAbout =()=> import('./pages/profile/about/about.vue')
	const profileSettings =()=> import('./pages/profile/settings/settings.vue')
const admin =()=> import('./pages/admin/admin.vue')
	const upequipls =()=> import('./pages/admin/UpdateEquipListtabcont.vue')
	const equipreq =()=> import('./pages/admin/equipreq.vue')
const services =()=> import('./pages/services/services.vue')
	const reqequip =()=> import('./pages/services/reqequip.vue')
	const issued=()=>import('./pages/services/issued.vue')

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
	{path:'/admin',component:admin,
		children:[
			{path:'updateequipls',component:upequipls},
			{path:'equipreq',component:equipreq}
		]
	},
	{path:'/services',component:services,
		children:[
			{path:'reqequip',component:reqequip},
			{path:'issued',component:issued}
		]
	}
  ]
});








export default router;