<template>
  <div style="width:100%;height:100vh;overflow:hidden;">
	<md-toolbar class="md-account-header" style="background-color:#2962FF;">
      <md-list class="md-transparent">
      	<div align="center">
      		<a href="http://nitdelhi.ac.in">
            	<img src="/src/assets/nitdlogo.gif" 
            	alt="People" class="logo">
            </a>
        </div>
		<md-list-item 	style="background-color:#0D47A1;" 
						@click="close('/profile')"
						v-if="user.email"
		>
				  <span class="md-subhead" >{{user.email}}</span>
		          <span style="flex: 1"></span>
		          <md-avatar class="img-cont">
		            <img :src="user.photoUrl" alt="People">
		          </md-avatar>
		</md-list-item>
		<md-list-item 	style="background-color:#0D47A1;" 
						@click="close('/login')"
						v-if="!user.email"
		>
				  <span class="md-subhead" >Login</span>
		          <span style="flex: 1"></span>
		          <md-avatar class="img-cont">
		            <img :src="user.photoUrl" alt="People">
		          </md-avatar>
        </md-list-item>
      </md-list>
    </md-toolbar>
    <div class="option-wrap">
	    <md-list >
	        <md-list-item 	v-for="o in options1" 
	        				:key="o.tit" 
	        				@click="close(o.linki)" 
	        >
	        		<md-icon >{{o.ico}}</md-icon>
	        		<span>{{o.tit}}</span>
	    	</md-list-item>
	    	<md-list-item class="md-inset" v-if="admin()">
	    			<span><b>Admin</b></span>
	    	</md-list-item>
	        <md-list-item 	v-for="o in options2" 
	        				:key="o.tit" 
	        				@click="close(o.linki)" 
	        				v-if="admin()"
	        >
	        		<md-icon >{{o.ico}}</md-icon>
	        		<span>{{o.tit}}</span>
	    	</md-list-item>
	    </md-list>
	</div>
  </div>
</template>

<script>
import {isLoggedIn,logOut,logIn} from '../helpers/authfunc'
export default {
	data() {
	    return {
	      user: {},
	      options1:[
	      			{tit:'Home',linki:'/',ico:'home'},
	      			{tit:'About',linki:'/about',ico:'book',},
	      			{tit:'RequestEquipments',linki:'/services/reqequip',ico:'chat'},
	      			{tit:'Club',linki:'*',ico:'book',},
	      			{tit:'Gallery',linki:'*',ico:'book',},
	      		],
	      options2:[
	      			{tit:'NewPost',linki:'/admin/newpost',ico:'create'},
	      			{tit:'IssuedEqps',linki:'/admin/issued',ico:'list'},
	      			{tit:'EquipRqs',linki:'/admin/equipreq',ico:'chat'},
	      			{tit:'UpdateList',linki:'/admin/updateequipls',ico:'create'}
	      		]	      		
	    }
 	},
 	created() {
       isLoggedIn().then(userinfo => {
      		this.user=userinfo
   		 })
  	},
  	methods:{
  		close:function(foo){
  			this.$router.push(foo)
  			this.$emit('closemenu')
  		},
  		admin:function(){
	          if(this.user.email){
	                  let email='161210004@nitdelhi.ac.in'
	                  if(this.user.email===email){
	                      return true
	                  }
	                  else{
	                    return false
	                  }
	          }
	          else{
	                  return false
	          }
  		}
  	}
}	
</script>

<style >
.logo{
	border-radius:50%;
	height:90px;
	width:90px;
	margin:10px;
}
.img-cont{
  background-color: white;
  border:2px solid white;
}
.option-wrap{
	height:70vh;
	overflow-x:hidden;
}
</style>