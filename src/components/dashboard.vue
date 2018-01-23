<template>
	<div >
			<div v-if="!errorr">
				<md-whiteframe md-elevation="4" class="wrap-dp">
					<div class="cont-dp">
						<img class="dp" :src="user.photoUrl"/>
					</div>
					<div class="profile-info" >
							<div class="mylist-item "v-if="user.email">{{user.name}}</div>
							<div class="mylist-item "v-if="user.email">{{user.email}}</div>
							<div ><md-button @click="lgOut">LogOut</md-button></div>
							<md-spinner md-indeterminate 
										class="md-accent" 
										v-if="!user.email"
							>
							</md-spinner>
					</div>
							
				</md-whiteframe>
				<md-whiteframe md-elevation="2" class="cont-list">
						<!-- {{reqs}} -->
						This Feature will be available soon.
				</md-whiteframe>
				<md-whiteframe md-elevation="2" class="cont-list">
						<!-- {{issued}} -->
						This Feature will be available soon.
				</md-whiteframe>
			</div>
			<div v-if="errorr">
					Trying logging with account which matches with @nitdelhi.ac.in
			</div>
	</div>

</template>

<script>
import firebase from 'firebase'
var dtb=firebase.database()
import {isLoggedIn,logOut} from '../helpers/authfunc'
export default {
	data(){
		return{
			user: {},
			errorr:false,
			reqs:[],
			issued:[],
			newi:[],
		}
	},
  	created() {
  		var id
  		var err
    	isLoggedIn().then(userinfo => {
      		this.user=userinfo
    //   				id=userinfo.email.slice(0,9)
				// let foo=userinfo.email.includes('nitdelhi.ac.in')
				// if(foo){
				// 	dtb.ref('/users/'+id).on('value',(snap)=>{
				// 				if(snap.exists()){
				// 					// this.getList(0,id,'reqs')
				// 					// this.getList(1,id,'issued')
				// 					return this.user=snap.val()
				// 				}
				// 				else{
				// 					 	dtb.ref('users/'+ id).set(userinfo)
				// 					 	dtb.ref('/users/'+id).on('value',(snap)=>{
				// 							if(snap.exists()){
				// 								// this.getList(0,id,'reqs')
				// 								// this.getList(1,id,'issued')
				// 								return this.user=snap.val()
				// 							}
				// 							else{
				// 								return logOut()
				// 							}
				// 						})
				// 				}
				// 	})					
						
				// }
				// else{
				// 	return logOut()
				// }

    	})

  },
  methods:{
  		lgOut:function(){
  			logOut()
  		},
  		getList:function(t,id,from){
  				// var foo
		  		// var ref=dtb.ref('activity/'+id+'/'+from)
		    //       	foo=new Promise((resolve,reject)=>{
		    //       		var arry=[]
		    //               ref.on("value", function(snapshot) {
		    //                 if(snapshot.val()){
		    //                   for (let key in snapshot.val()) {
		    //                     arry.push(snapshot.val()[key])
		    //                   }
		    //                   resolve(arry)
		    //                 }
		    //                 else{
		    //                   reject([])
		    //                 }
		    //               });
		    //       	})
		    //       	foo.then((bar)=>{
		    //       		if(!t)
		    //           		this.reqs=bar
		    //           	else
		    //           		// this.getListitem(t,bar)
		    //           		this.issued=bar
		    //       	})
  				
  		},
  		getListitem:function(t,bar){
  					// var too
			  		// var ref=dtb.ref('issuedequip/-L0Y_MdYNZ0_tVGKLPdP')
			    //       	too=new Promise((resolve,reject)=>{
			    //       		var arry=[]
			    //       		// bar.forEach(e=>{
			    //       			ref.on("value", function(snapshot) {
			    //                 	if(snapshot.val()){
			    //                     	arry.push(snapshot.val()[key])
			    //                   		resolve(arry)
			    //                   	}
			    //                   	else
			    //                   		reject([])
			    //               	});
			    //       		// })
			    //       		// if(arry.length)resolve(arry)
			    //       	})
			    //       	too.then((bar)=>{
			    //       		console.log(bar)
			    //           		this.newi=bar
			    //       	})
						
  		}
  }
}
</script>
<style>
.wrap-dp{
	width:100%;
	position: relative;
	margin-top:50px;
	padding-top:80px;
	min-height:170px;
	background-color: #0f628b;
    background-image: linear-gradient(180deg, hsl(200, 81%, 30%) 0%, #2AF598 100%);

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
	background-color:lightgrey;

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
.cont-list{
	margin-top:40px;
	padding:20px;
}
</style>