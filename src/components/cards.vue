<template>
  <div class="cards-cont">
<!--   			<div>
  				<md-input-container style="padding:1;margin:0;">
               					 <label>Upload Data</label>
               					 <md-input style="padding:0;margin:0;" 
               					 v-model="postadd"></md-input>
               					 <md-icon>add</md-icon>
            	</md-input-container>
  				<br><md-button @click="submit">Submit</md-button>
  				<div>{{posts}}</div>
  			</div> -->
  			<md-card v-for="(post,index) in filtered" class="card" >
				  <md-card-header>
				    <md-avatar>
				      <img src="/src/assets/manavatar.png" alt="People">
				    </md-avatar>

				    <div class="md-title">{{post.name}}</div>
				    <div class="md-subhead">ajrathore786@gmail.com</div>
				  </md-card-header>

				  <md-card-media align="center" style="backgound-color:black">
				    <img src="/src/assets/football3.jpg" class="banner"alt="People">
				  </md-card-media>

				  <md-card-content>
				    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
				  </md-card-content>

				  <md-card-actions>
				  	<span v-if="!user.email"
				  			style="margin-right:9px"
				  			>LogIn to react
				  	</span> 
				  	<b >{{post.like.length}}</b>
				   <md-button class="md-icon-button " 
								@click="handleLike(checkLike(index),post.id,index)"
								:disabled='!user.email'
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
			<a href="#scrollTop">
		         <md-button class="md-fab md-medium md-primary locate"
							style="background-color:#039be5;"
		         >
		            <md-icon>eject</md-icon>
		          </md-button>
      		</a>
  </div>
</template>

<script>
import axios from 'axios'
import firebase from 'firebase'
import {isLoggedIn} from '../helpers/authfunc'

var dtb=firebase.database()

export default {
	props:['search'],
	data(){
		return{
			posts:[{name:'working',like:[]}],
			postadd:'Amigos',
			user:{},
		}
	},
	created(){
		axios.get('https://sportsclub-96f61.firebaseio.com/posts.json').then((response)=>{
			  var arry=[]
		      for (let key in response.data) {
		      	response.data[key].id=key
		        arry.push(response.data[key])
		      }
		      this.posts=arry.reverse();
    	})
    	isLoggedIn().then(userinfo => {
      		this.user=userinfo
    	})
		// var top = firebase.database().ref('posts/').orderByChild('name')
		// console.log(top)
	},
	computed:{
		filtered:function(){
			return this.posts.filter((post)=>{
				return post.name.match(this.search);
			})
		}

	},
	methods:{
		submit:function(){
			var postsend={name:'working',like:['1']}
				postsend.name=this.postadd
			var newPostKey = dtb.ref().child('posts').push().key;
			var updates = {};
  				updates['/posts/' + newPostKey] = postsend;
			return firebase.database().ref().update(updates);

		},
		handleLike:function(stat,key,index){
			if(this.user.email){
				var newlike=[]
				newlike=this.posts[index].like
				var email=this.user.email
			
				if(!stat){
							newlike.push(email)
				}
				else{
					const index = newlike.indexOf(email);
						newlike.splice(index,1)
				}
				var updates={}
			  		updates['/posts/'+key] = {"like":newlike}
			  		newlike=[]
					return 	dtb.ref().update(updates)
			}
		},
		checkLike:function(index){
				if(this.user.email){
					var email=this.user.email
					return this.posts[index].like.includes(email)
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
</style>