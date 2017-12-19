<template>
  <div class="cards-cont">
  			<md-card v-for="(post,index) in filtered" :key="post.id" class="card" >
				  <md-card-header>
				    <div class="md-title">
				    		<router-link :to="'/posts/'+post.id">
				    				{{post.title}}
				    		</router-link>
				    </div>
				    <div class="md-subhead">{{post.date}}</div>
				  </md-card-header>

				  <md-card-media align="center" style="backgound-color:black">
				    <img :src="post.banner" class="banner"alt="People">
				  </md-card-media>

				  <md-card-content>
				    {{post.body}}
				  </md-card-content>

				  <md-card-actions>
				  	<span v-if="!usr"
				  			style="margin-right:9px"
				  			>LogIn to react
				  	</span> 
				  	<b >{{likes[index].user.length}}</b>
				   <md-button class="md-icon-button " 
								@click="handleLike(checkLike(index),post.id,index)"
								:disabled="!usr"
				    		   >
				    	<md-icon :class="{likeBut:checkLike(index)}"
				    			>favorites
				    	</md-icon>
				    </md-button>
				    <md-button class="md-icon-button">
				    	<md-icon>share</md-icon>
				    </md-button>
				  </md-card-actions>
			</md-card>
	
			<!-- scroll to top button -->
			<a href="#scrollTop" style="z-index:0;">
		         <md-button class="md-fab md-medium md-accent locate"
							style="background-color:#F48FB1;"
		         >
		            <md-icon>eject</md-icon>
		          </md-button>
      		</a>
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
			posts:[],
			user:{},
			likes:[{id:'',user:[]}],
			usr:''
		}
	},
	created(){
        	var arry=[]
        	var arry1=[]
        	dtb.ref('/likes').on("value",(snap)=>{
							arry1=[]
							for (let key in snap.val()) {
						        arry1.push(snap.val()[key])
						      }
						    this.likes=arry1
				})
        	var foo=new Promise(res=>{
					dtb.ref('/newposts').on("value",(snap)=>{
							arry=[]
							for (let key in snap.val()) {
						        arry.push(snap.val()[key])
						      }
						    res(arry)
					})
				})
        		foo.then((res)=>{
						if(res){
							this.posts=res
						}
				})

				isLoggedIn().then(userinfo => {
      				this.usr=userinfo.email.slice(0,9)
    			})
	},
	computed:{
		filtered:function(){
			return this.posts.filter((post)=>{
				return post.title.match(this.search);
			})
		}
	},
	methods:{
		handleLike:function(stat,key,index){
			if(this.usr){
				var newlike={id:'',user:[]}
					newlike.id=key
					newlike.user=this.likes[index].user
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
		checkLike:function(index){
				if(this.usr){
					return this.likes[index].user.includes(this.usr)
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
	z-index:0 !important;
}
.card{
	margin:10px 0;
	z-index:0 !important;
}
.locate{
  position:fixed;
  bottom:0;
  left:0;
  z-index:00;
  background-color:red;
}
.likeBut{
	color:red !important;
}
</style>