<template>
	<div style="padding:10px;">
		      <div class="equip-wrap">
		          <div>
		              <md-input-container style="width:25%;"  >
		                  <label for="sports">ChooseSport</label>
		                      <md-select  name="sports"
		                                  id="sportsitemlist"
		                                  v-model="selected"

		                      >
		                          <md-option  v-for="spo in sportsname"
		                                      :value="spo"
		                                      @selected="filterCategory(spo)"
		                                      :key="spo"
		                                      v-if="equipnames.length"
		                          >
		                                <span style="padding:0 20px">
		                                                    {{spo}}
		                                </span>
		                          </md-option>
		                          <md-option v-if="!equipnames.length">
		                                <md-spinner :md-size="40" 
		                                            md-indeterminate 
		                                            class="md-warn"
		                                >
		                                </md-spinner>                            
		                          </md-option>
		                      </md-select>
		              </md-input-container>
		          </div>
		          <md-divider></md-divider>
		          <div class="md-subhead" style="margin:10px 0 0 0;color:grey;"
		                                  v-if="!selected"
		          > 
		              Choose a sport for options !!
		          </div>
		          <div>
		                <md-chip  md-editable
		                          v-on:edit="additem(tit)"
		                          style="margin:5px 5px;"
		                          v-for="tit in filtered"
		                          :key="tit.equip"
		                >
		                    {{tit.equip}}
		                    {{tit.rem}}/{{tit.total}}
		                </md-chip>
		          </div>
		      </div>		
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
        msg:'',
 		selected:'',
       	equipnames:[],
       	filtered:[],
       	selectedcart:[],       
    }
  },
  created(){
          this.getEquips().then((bar)=>{
              this.equipnames=bar
          })
  },
  computed:{
  	checkreq:function(){
  		let f=this.updatelist
  			if(f.sport && f.equip){
  				return false
  			}
  			else return true
  	},
    sportsname:function(){
        var foo=[]
            this.equipnames.forEach((e)=>{
                        foo.push(e.sport)
            })
        var bar=Array.from(new Set(foo))
        return  bar
    },  
  },
  methods:{
  	addSel:function(){
  			let foo=this.updatelist
  				dtb.ref('/equipments/'+foo.id).update(foo,(err)=>{
  					if(err==null){
  						this.open(1)
  					}
  					else{
  						this.open(0)
  					}
  				})

  			this.clearVars()

  	},
  	open:function(foo){
  			if(foo){
  				this.msg='Succesfull!! attempt.'
  			}
  			else{
  				this.msg='Error!! Try again.'

  			}
  			return this.$refs.snackbarnewequip.open();
  	},
  	additem:function(foo){
  		this.updatelist=foo
  	},
    getEquips:function(){
              var ref = dtb.ref("equipments/");
              var arry=[]
              return  new Promise((resolve,reject)=>{
                        ref.on("value", function(snapshot) {
                          arry=[]
                          // let check===snapshot.val() && snapshot.exists()
                          if(snapshot.val()){
                            for (let key in snapshot.val()) {
                              arry.push(snapshot.val()[key])
                            }
                            resolve(arry)
                          }
                          else{
                            reject([])
                          }
                        });
                      })
    }, 
    filterCategory:function (category) {
      this.filtered = []
      this.equipnames.forEach(c => {
        if (c.sport === category) {
          this.filtered.push(c)
        }
      })
    },
    clearVars:function(){
        this.updatelist={sport:'',equip:'',total:0,id:'',rem:0}
 		this.selected=''
       	this.equipnames=[]
       	this.filtered=[]
       	this.selectedcart=[]
    }
  }
}
</script>

<style lang="css">
.equip-wrap{
	border:1px solid lightgrey;
	padding:10px;
	margin-bottom:20px;
}
</style>