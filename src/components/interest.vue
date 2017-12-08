<template>
  <div class="cards-wrap" id="topCard">
			    <md-card style="padding:0;margin-bottom:10px;">
			      
			      <md-card-content style="padding:-5px 1px 0px 1px;" >
			        	<div class="search-box-wrap">
            				<md-input-container style="padding:1;margin:0;">
               					 <label>What are you looking for ?</label>
               					 <md-input style="padding:0;margin:0;" 
               					 v-model="searchInput"></md-input>
               					 <md-icon>search</md-icon>
            				</md-input-container>
						</div>
						<md-button class="md-icon-button " 
									v-on:click="show = !show"
									
								   style="vertical-align:bottom;padding:0;margin:0;"
						>
								<md-icon v-bind:class="{sortButton:show}">sort</md-icon>
						</md-button>
			      </md-card-content>
			    </md-card>
			   
			    <transition name="bounce">
				  <md-card style="padding:0;margin-top:10px;" v-if="show">
				      <md-card-content style="padding:0;margin:0px;">
				        	<div style="width:100%;">
									<md-button 	v-for="(option,index) in options"
												v-bind:class="{'md-primary':option.status}"
												@click="addInt(option.name,index)"
									>{{option.name}}</md-button>
									<div align="right">
										<md-button class="md-primary md-raised"
												   @click="show=!show"
										>
											Apply
										</md-button>
									</div>
							</div>
							{{newInt}}
				      </md-card-content>
			    </md-card>
				</transition>
				<cards :search="searchInput"></cards>
  </div>
</template>

<script>
const cards =()=>import('./cards.vue')
export default {
  components:{
  	cards
  },
  data(){
  	return{
  		first:false,
  		search:false,
  		searchInput:'',
  		show:false,
  		movies:[],
  		options: [
	      { id: 1, name: 'Football',status:false},
	      { id: 2, name: 'Cricket',status:false },
	      { id: 3, name: 'Baseball',status:false },
	      { id: 4, name: 'Tennis',status:false },
	      { id: 5, name: 'Chess',status:false}
    	],
    	items:[],
    	newInt:[]
  	}
  },
  methods:{
  	addInt(interest,index){
  		var status=this.options[index]
  		

  		if(!status.status)
			 this.newInt.push(interest);
		else{
			 this.newInt.forEach((v,i)=>{
					if(v===status.name){
						this.newInt.splice(i,1)
					}
				})
		}
		return this.options[index].status=!status.status
  	}
  }
}
</script>

<style>
.cards-wrap{
	width:98%;
	margin:0 auto;
}
.search-box-wrap{
	width:91%;display:inline-block;
	vertical-align: middle;
}
.sortButton{
	transform:rotateZ(180deg);
}
.chip{
	display: inline-block;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@media only screen and (max-width:5.5in){
.search-box-wrap{
  width:86%;
  
}
}
</style>