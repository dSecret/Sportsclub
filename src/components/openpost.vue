<template>
  <div class="cards-cont">
  			<md-card  class="card" >

				  <md-card-header>
				    <div class="md-title">{{p.title}}</div>
				    <div class="md-subhead">{{p.date}}</div>
				  </md-card-header>

				  <md-card-media align="center" style="backgound-color:black">
				    <img :src="p.banner" class="banner"alt="People">
				  </md-card-media>

				  <md-card-content>
				    {{p.body}}
				  </md-card-content>

				  <md-card-actions>
				  	<span v-if="!usr"
				  			style="margin-right:9px"
				  			>LogIn to react
				  	</span> 
				  	<b >{{like.user.length}}</b>
				   <md-button class="md-icon-button " 
								@click="handleLike(checkLike(),p.id)"
								:disabled="!usr"
				    		   >
				    	<md-icon :class="{likeBut:checkLike()}"
				    			>favorites
				    	</md-icon>
				    </md-button>
				    <md-button class="md-icon-button">
				    	<md-icon>share</md-icon>
				    </md-button>
				  </md-card-actions>
			</md-card>
			<md-whiteframe md-elevation="2"
						   class="form-cont"
			>
					<a  v-for="f in p.forms":href="f.linki">{{f.title}}</a>
			</md-whiteframe>
  </div>
</template>

<script>
import firebase from 'firebase'
import {isLoggedIn} from '../helpers/authfunc'
var dtb=firebase.database()


export default {
	props:['search'],
	data(){
		return{
			p:{},
			user:{},
			like:{id:'',user:[]},
			usr:'',
			id:this.$route.params.id
		}
	},
	created(){
        	var arry1={}
        		dtb.ref('/likes/'+this.id).on("value",(snap)=>{
						    this.like=snap.val()
				})
        	var foo=new Promise(res=>{
					dtb.ref('/newposts/'+this.id).on("value",(snap)=>{
						    res(snap.val())
					})
				})
        		foo.then((res)=>{
						if(res){
							this.p=res
						}
				})

				isLoggedIn().then(userinfo => {
      				this.usr=userinfo.email.slice(0,9)
    			})
	},
	computed:{
	
	},
	methods:{
		handleLike:function(stat,key){
			if(this.usr){
				var newlike={id:'',user:[]}
					newlike.id=key
					newlike.user=this.like.user
				if(!stat){
						newlike.user.push(this.usr)
				}
				else{	
						const 	ind=newlike.user.indexOf(this.usr)
								newlike.user.splice(ind,1)
				}
				dtb.ref('/likes/'+key).update(newlike)
			}
		},
		checkLike:function(){
				if(this.usr){
					return this.like.user.includes(this.usr)
					// return false
				}
				else return false
		}
	}
}
</script>

<style>
.banner{
	max-height:300px;
	width:100% !important;
	margin:0 auto !important;
}
.cards-cont{
	width:100%;
	margin:0 auto;
}
.card{
	margin:10px 0;
}
.locate{
  position:fixed;
  bottom:0;
  left:0;
  z-index:100;
  background-color:red;
}
.likeBut{
	color:red !important;
}
.form-cont{
	padding:40px 20px;
}
</style>