import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export const store= new Vuex.Store({
    state:{
    	"user":{"name":"","email":"","photoUrl":""}
    },
    getters:{
    	getUser:(state)=>{
    		return state.user
    	},
    	checkAdmin:(state)=>{
    		return state.user.email!==''||state.user.email!==null
    	},
    	checkNitdUser:(state)=>{
	        var str=state.user.email
	              if(str.search('@nitdelhi.ac.in')==-1){
	                  return next('/')
	              }
	              else{
	                  return next()  
	              }      		
	    	}
    },
    mutations:{
    	setUser:(state,userinfo)=>{
    		// setTimeout(()=>state.user=firebase.auth().currentUser.email,3000)
    			state.user=userinfo
    			console.log('setuser',state.user.name)
    	}
    },
    actions:{
    	setUser:context=>{
    		let userinfo={"name":"","email":"","photoUrl":""}
	      	firebase.auth().onAuthStateChanged((user) => {
	          	if(user){
	                            userinfo.name=user.displayName
	                            userinfo.email=user.email
	                            userinfo.photoUrl=user.photoURL
	                            context.commit('setUser',userinfo)
	                  }
	          	else{
	             // reject({"name":"","email":"","photoUrl":""}) 
	          					context.commit('setUser',userinfo)
	          	}
	       	})    		
    		
    	},
    	logOut:context=>{
			firebase.auth().signOut();
  			window.location.reload()    		
    	}
    }
})