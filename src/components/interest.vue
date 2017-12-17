<template>
  <div class="cards-wrap" id="topCard">
			    <md-card style="padding:0;margin-bottom:10px;z-index:0;">
			      <md-card-content style="padding:-5px 1px 0px 1px;" >
            				<md-input-container style="padding:1;margin:0;">
               					 <label>What are you looking for ?</label>
               					 <md-input style="padding:0;margin:0;" 
               					 v-model="searchInput"></md-input>
               					 <md-icon>search</md-icon>
            				</md-input-container>
			      </md-card-content>
			    </md-card>
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
    	items:[]
  	}
  },
  methods:{
  	
  }
}
</script>

<style scoped>
.cards-wrap{
	width:98%;
	margin:0 auto;
}
@media only screen and (max-width:5.5in){
.search-box-wrap{
  width:86%;
  
}
}
</style>