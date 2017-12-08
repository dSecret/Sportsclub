<template>
	<div >
		<div class="wrap-dp">
			<div class="cont-dp">
				<img class="dp" :src="user.photoUrl"/>
			</div>
			<div class="profile-info">
					<div class="mylist-item ">{{user.name}}</div>
					<div class="mylist-item ">{{user.email}}</div>
					<div class="mylist-item ">+91-9795455055</div>

			</div>
		</div>
		<md-tabs md-sync-route 
				class="md-transparent" 
				md-alignment="centered"
				style="border:1px solid lightgrey"
		>
		      
			      <md-tab 	:id="linki.icon" 
			      			:md-icon="linki.icon" 
			      			:to="linki.path"
			      			 v-for="linki in tabLinks" 
			      >
			      		Coming Soon...
			      </md-tab>
			  
		</md-tabs>
		
	</div>

</template>

<script>
import {isLoggedIn,logOut} from '../helpers/authfunc'
export default {
	data(){
		return{
			user: {},
			tabLinks:[
				{path:'/profile/home',icon:'home'},
				{path:'/profile/event',icon:'events'},
				{path:'/profile/about',icon:'person'},
				{path:'/profile/settings',icon:'settings'}
			]
		}
	},
  	created() {
    	isLoggedIn().then(userinfo => {
      		this.user=userinfo
    	})
  },
}
</script>
<style>
.wrap-dp{
	width:100%;
	position: relative;
	margin-top:50px;
	padding-top:80px;
	min-height:170px;
	background-color:lightgrey;
	background:url('~/src/assets/football3.jpg') 0 0/100% 100% no-repeat; 

}
.cont-dp{
	width:100px;
	position:absolute;
	left:20px;
	top:-50px;
	height:100px;
	border-radius:50%;
	border:3px solid white;
	box-sizing: border-box;
	-moz-box-sizing: border-box;
	overflow: hidden;
}
.dp{
	width:100%;
	height:100%;
}
.profile-info{
	background-color:rgba(0,0,0,0.5);
	padding-left:50px;
	padding-top:10px;
	min-height:100px;
	width:100%;
	box-sizing: border-box;
	-moz-box-sizing: border-box;
}
.mylist-item{
	color:white;
	width:100%;
	margin-bottom:8px;
	font-size:17px;
	font-family:'Roboto',sans-serif;
	
}
</style>