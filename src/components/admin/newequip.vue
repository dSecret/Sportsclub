<template>
	<div style="padding:10px;">
              <md-input-container>
                <label>Sport*</label>
                <md-input type="text" v-model="updatelist.sport"></md-input>
                <md-icon>rowing</md-icon>
              </md-input-container>
              <md-input-container>
                  <label>Equipment*</label>
                  <md-input type="text" v-model="updatelist.equip"></md-input>
                  <md-icon>toys</md-icon>
              </md-input-container>
              <md-input-container>
                  <label>Total</label>
                  <md-input type="number" v-model="updatelist.total"></md-input>
              </md-input-container>
              <div align="right">
              		<md-button @click="addSel"
              					class="md-primary md-raised"
              					:disabled="checkreq"
              		>
              					SaveEdits
              		</md-button>
              </div>
		      <md-snackbar  md-position="bottom right" 
		                    ref="snackbarnewequip" 
		                    md-duration="3000"
		      >
		        <div class="md-subhead">
		            {{msg}}
		        </div>
		      </md-snackbar>
  	</div>
</template>

<script>
import firebase from 'firebase'
var dtb=firebase.database()
export default {
  data () {
    return {
        updatelist:{sport:'',equip:'',total:0,id:'',rem:0},
        msg:''
    }
  },
  computed:{
  	checkreq:function(){
  		let f=this.updatelist
  			if(f.sport && f.equip){
  				return false
  			}
  			else return true
  	}
  },
  methods:{
  	addSel:function(){
  			var newPostKey = dtb.ref('/equipments').push().key;
  				this.updatelist.id=newPostKey;
  				this.updatelist.rem=this.updatelist.total;
  				dtb.ref('/equipments/'+newPostKey).update(this.updatelist,(err)=>{
  					if(err==null){
  						this.open(1)
  					}
  					else{
  						this.open(0)
  					}
  				})

  	},
  	open:function(foo){
  			if(foo){
  				this.msg='Succesfull!! attempt.'
  			}
  			else{
  				this.msg='Error!! Try again.'

  			}
  			return this.$refs.snackbarnewequip.open();
  	}
  }
}
</script>

<style lang="css">
</style>