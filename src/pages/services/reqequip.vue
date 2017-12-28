<template>
  <div class="wrap">
      <md-whiteframe md-elevation="1" style="padding:10px;">
          <msg></msg>
      </md-whiteframe>
      <md-whiteframe md-elevation="1" style="padding:10px;margin-top:20px;">
          <div>
              <md-input-container style="width:20%;"  >
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
          <transition name="fade" mode="out-in">
                  <div v-if="show" key="save">
                        <span class="error-msg-span">
                          ! Picked item is already in the cart.
                        </span>
                  </div>
                  <div v-else key="edit">
              </div>
          </transition>
          <div>
                <md-chip  md-editable
                          v-on:edit="additem(tit)"
                          style="margin:5px 5px;"
                          :disabled="!tit.rem"
                          v-for="tit in filtered"
                          :key="tit.equip"
                >
                    {{tit.equip}}
                    {{tit.rem}}/{{tit.total}}
                </md-chip>
          </div>
      </md-whiteframe>
      <md-whiteframe md-elevation="1" style="padding:14px;margin-top:20px;">
                  <div class="md-subheading">Selected items </div>
                  <md-chip md-deletable
                          v-for="(til,index) in selectedcart"
                          @delete="removeitem(index)"
                          style="margin:5px 5px;"
                         :key="index"
                         class="md-accent"
                  >
                        {{til.equip}}
                      <md-tooltip md-direction="bottom">Remove from cart</md-tooltip>
                  </md-chip>
                  <div >
                    <md-input-container>
                      <label>Request Message*</label>
                      <md-textarea v-model="req.msg"></md-textarea>
                    </md-input-container>
                  </div>
                  <div style="text-align:right;">
                        <md-button class="md-primary md-raised"
                                    style="margin-right:0;"
                                    @click="readyObj"
                                    :disabled="verifyreq"
                        >
                                  Request
                        </md-button>
                  </div>
      </md-whiteframe>
      <md-snackbar  md-position="bottom right" 
                    ref="snackbar" 
                    md-duration="3000"
      >
        <div :class="{snackbarMsg:!postStatClr}">
            {{postStatMsg}}
        </div>
      </md-snackbar>
  </div>

</template>

<script>
import msg from '../../components/services/showbar_msg.vue'
import firebase from 'firebase'
var dtb=firebase.database()

export default {
components:{
  'msg':msg,
},
  data () {
    return {
      show:false,
      postStatClr:true,
      postStatMsg:'',
      selected:'',
      equipnames:[],
      filtered:[],
      selectedcart:[],
      removemsg:'remove from cart',
      req:{id:'',user:'',date:'',cart:[],msg:'',status:'Pending',reply:''}
    }
  },
  created(){
          this.getEquips().then((bar)=>{
              this.equipnames=bar
          })
  },
  computed:{
     sportsname:function(){
        var foo=[]
            this.equipnames.forEach((e)=>{
                        foo.push(e.sport)
            })
        var bar=Array.from(new Set(foo))
        return  bar
      },
      verifyreq:function(){
              if(this.req.msg && this.selectedcart.length){
                return false
              }
              else return true
      }
  },
  methods:{
    open(foo) {
      if(foo){
        this.postStatClr=true
        this.postStatMsg='Successful, Check your dashboard for status.'
      }
      else{
        this.postStatClr=false
        this.postStatMsg='Error, Try again.'
      }
      this.$refs.snackbar.open();
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
    additem:function(foo){
        var add=true
        this.selectedcart.forEach(c => {
          if (c === foo) {
             return add=false;

          }
        })
        if(!add){
          this.show=true;
        }
        if(add){
            this.selectedcart.push(foo);
            add=true;this.show=false;
        }
      },
    removeitem:function(index){
        this.selectedcart.splice(index,1);
    },
    readyObj:function(){
              if(!this.verifyreq){
                  var postsend={  id:'',user:'',date:'',cart:[],
                                  msg:'',status:'Pending',reply:''
                                }      
                  var newPostKey = dtb.ref().child('equipreqs').push().key;
                      this.req.id=newPostKey
                      this.selectedcart.forEach((e)=>{
                            this.req.cart.push(e.id)
                      })
                      this.req.user=firebase.auth().currentUser.email.slice(0,9)
                      this.req.date=new Date()
                  var updates = {};
                      updates['/equipreqs/' + newPostKey] = this.req;
                      this.selected=''
                      this.selectedcart=[]   
                      this.filtered=[]
                      //calling for post req to databse
                      return this.reqitem(updates,newPostKey,postsend)               
              }

    },
    reqitem:function(u,n,p){
                    // first needs to be post on /equips then on/activity list
                    dtb.ref().update(u,(err)=>{
                        if(err==null){
                            // let c='/activity/'+this.req.user+'/reqs/'+n
                            // dtb.ref(c).update({id:n},(error)=>{
                            //     if(error===null)
                            //       this.open(1)
                            // }) 
                            this.open(1)      
                        }
                        else{
                            this.open(0)
                        }
                        return this.req=p
                    });
                    
    },
},


}
</script>

<style scoped>
.wrap{
  width:100%;
  /*margin-top:-10vh;*/
  font-family: 'Roboto', sans-serif;
  margin-bottom:50px;
  padding:10px;
  position: relative;
}
/*@media only screen and (max-width:7in){
.common{
    padding:5% !important;
  }
.wrap-chipedit{
  display:inline-block;
  margin-right:5px;
}
.sidebar{
  margin:2% 0% 1% 0%;
}
}*/
.snackbarMsg{
  color:red !important;
}
.error-msg-span{
  color:red;font-size:103%;font-weight:bold;padding:0;margin: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
/*css of textarea*/

/**/

</style>
