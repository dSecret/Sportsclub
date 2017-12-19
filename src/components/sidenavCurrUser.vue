<template>
  <div style="width:100%;margin-bottom:30px;">
	<md-toolbar class="md-account-header" style="background-color:#2962FF;">
      <md-list class="md-transparent">
      	<div align="center">
      		<a href="http://nitdelhi.ac.in">
            	<img src="/src/assets/nitdlogo.gif" alt="People" class="logo">
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
    <md-list >
       	<md-list-item v-for="o in options" :key="o.tit" @click="close(o.linki)" >
        		<md-icon v-if="!o.type">{{o.ico}}</md-icon>
        		<span>{{o.tit}}</span>
        	<md-list-expand v-if="o.type">
        		<md-list>
           		 	<md-list-item 	class=""
           		 					v-for="ex in o.expand"
           		 					:key="ex.tit"
           		 					@click="close(ex.linki)"
           		 	>
           		 			  		<md-icon>{{ex.ico}}</md-icon>
        							<span>{{ex.tit}}</span>
           		 	</md-list-item>
        		</md-list>
        	</md-list-expand>
    </md-list-item>
    </md-list>
  </div>
</template>

<script>
import {isLoggedIn,logOut,logIn} from '../helpers/authfunc'
export default {
	data() {
	    return {
	      user: {},
	      options:[
	      			{tit:'Home',type:false,linki:'/',expand:[],ico:'home'},
	      			{tit:'About',type:false,linki:'/about',ico:'book',expand:[]},
	      			{tit:'RequestEquipments',type:false,linki:'/services/reqequip',ico:'chat',
	      				expand:[]
	      			},
	      			{tit:'Gallery',type:false,linki:'/gallery',ico:'photo_album',
	      				expand:[]
	      			},
	      			{tit:'Sports',type:true,linki:'/',ico:'home',
	      				expand:[]
	      			},

	      			{tit:'Admin',type:true,linki:'/',ico:'home',
	      				expand:[
	      						{tit:'NewPost',linki:'/admin/newpost',ico:'create'},
	      						{tit:'IssuedEqps',linki:'/admin/issued',ico:'list'},
	      						{tit:'EquipRqs',linki:'/admin/equipreq',ico:'chat'},
	      						{tit:'UpdateList',linki:'/admin/updateequipls',ico:'create'},
	      						]
	      			}
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
</style>