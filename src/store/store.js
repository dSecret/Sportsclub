import Vue from 'vue'
import Vuex from 'vuex'
import {isLoggedIn,logOut,logIn} from '../helpers/authfunc'
Vue.use(Vuex)

export const store= new Vuex.Store({
    state:{
    	"name":"dSecret",
    	"user":isLoggedIn(),
    },
    actions:{
		  // logOut:(context,option)=>{
		  //   	context.commit('logOut',option)
		  // },
		  // logIn:(context,option)=>{
		  //   	 context.commit('logOut',option)
		  // }			
    },
    mutations:{
		  // logOut:(state,option)=>{
		  // 			  logOut()
		  // },
		  // logIn:(state,option)=>{
		  // 			  logIn()
		  // },
    }
})