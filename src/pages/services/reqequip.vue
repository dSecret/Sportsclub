<template>
  <div class="wrap">
        <!--the container is divided two half one sidebar and other showbar-->
      <div class="sidebar common">
  <!--This inner-div will be replaced by <sidebar></sidebar>-->
                    <div class="container-select">
                        <div >
                          <md-input-container style="width:70%;">
                              <label for="sports">Choose</label>
                              <md-select name="sports"
                                          id="sportsitemlist"
                                          v-model="selected"
                              >
                                  <md-option v-for="spo in sportsname"
                                                  :value="spo"
                                                  @selected="filterCategory(spo)"
                                                  :key="spo"
                                  >
                                                  <span style="padding:0 20px">
                                                    {{spo}}
                                                  </span>
                                  </md-option>
                              </md-select>
                            </md-input-container>
                        </div>
                    </div>
                    <div class="container-equip" >
                          <div  v-for="tit in filtered" class="wrap-chipedit" :key="tit.equip">
                              <md-chip md-editable
                                        v-on:edit="additem(tit)"
                                        style="margin:5px 0;"
                                        >
                                  {{tit.equip}}
                                  <!--{{tit.remain}}/{{tit.total}}-->
                              </md-chip>
                              <!--<div @click="additem" class="con-equipname">{{tit.equipname}}</div>
                              <div class="con-equipavail">{{tit.remain}}/{{tit.total}}</div>
                            -->
                            
                          </div>
                          <!-- {{sportsname}} -->
                    </div>
      </div>
      <div class="showbar common">
            <div class="showbar-msg">
                <msg></msg>
            </div>
            <div class="showbar-selected">
  <!--This inner-div will be replaced by <showbar_selected></showbar_selected>-->
                <div style="width:100%;padding:02% 02%;">
                  <transition name="fade" mode="out-in">
                    <div v-if="show" key="save">
                        <span class="error-msg-span">
                          ! Picked item is already in the cart.
                        </span>
                    </div>
                    <div v-else key="edit">
                    </div>
                  </transition><br>
                  <div class="md-subheading">Selected items </div>
                      <md-chip md-deletable
                                v-for="(til,index) in selectedcart"
                                @delete="removeitem(index)"
                                style="margin:5px 5px;"
                                :key="index"
                              >
                                {{til.equip}}
                              <md-tooltip md-direction="bottom">Remove from cart</md-tooltip>
                      </md-chip>
                  <div >
                    <md-input-container>
                      <label>Request Message</label>
                      <md-textarea v-model="req.msg"></md-textarea>
                    </md-input-container>
                  </div>
                  <div style="text-align:right;">
                        <md-button class="md-primary md-raised"
                                    style="margin-right:0;"
                                    @click="reqitem"
                        >
                                  Request
                        </md-button>
                  </div>
                </div>
            </div>
      </div>
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
      test:true,
      show:false,
      truee:'',
      selected:'',
      equipnames:[],
      filtered:[],
      selectedcart:[],
      removemsg:'remove from cart',
      req:{id:'',user:'',date:'',cart:[],msg:'',status:'Pending',reply:''}
    }
  },
  created(){
          var ref = dtb.ref("equipments/");
          var arry=[]
          var foo
          foo=new Promise((resolve,reject)=>{
                  ref.on("value", function(snapshot) {
                    arry=[]
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

          foo.then((bar)=>{
              this.equipnames=bar
          })

          // this.equipnames=arry

  },
  computed:{
     sportsname:function(){
        var foo=[]
            this.equipnames.forEach((e)=>{
                        foo.push(e.sport)
            })
        var bar=Array.from(new Set(foo))
        return  bar
      }
  },
  methods:{
    filterCategory:function (category) {
      this.filtered = []
      this.equipnames.forEach(c => {
        if (c.sport === category) {
          this.filtered.push(c)
        }
      })
    },
    additem:function(foo){
      //  this.selectedcart.push(event.target.innerHTML);
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
    reqitem:function(){
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
                    // this.req=postsend
                    this.selectedcart=[]
                    dtb.ref().update(updates);
                    dtb.ref('/activity/'+this.req.user+'/reqs/'+newPostKey).update({id:newPostKey})
                return this.req=postsend
    },
},


}
</script>

<style scoped>
@media only screen and (max-width:7in){
.common{
    width:97%!important;
    margin-left:1.5%;
  }
.wrap-chipedit{
  display:inline-block;
  margin-right:5px;
}
.sidebar{
  margin:2% 0% 1% 0%;
}
}
.wrap{
  width:100%;
  margin-top:-10vh;
  font-family: 'Roboto', sans-serif;
  margin-bottom:20vh;
}
.container-select{
   padding-bottom:2%;padding-top:10px;
   padding-left:4%;
}
.common{
  display: inline-block;
  float:left;
  box-sizing: border-box;
  -moz-box-sizing:border-box;
  font-size:85%;overflow:none;
  border-radius:4px;
}
.sidebar{
  width:31%;
  background-color: lightgrey;
  font-family: 'Roboto', sans-serif;
  word-wrap: break-word;overflow: hidden;
  margin:2% 1% 1% 1%;
  min-height: 300px;
}
.showbar{
  width:66%;min-height:20px;margin:2% 1% 1% 0%;
  border-radius:4px;
}
.showbar-msg{
  border-radius:4px;
  background-color:lightgrey;overflow: none;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;-moz-box-sizing: border-box;
  padding:2% 0%;min-height:20px;
}
.showbar-selected{
  border-radius:4px;
  background-color:lightgrey;overflow: none;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;-moz-box-sizing: border-box;
  padding:0% 0% 0 0%;min-height:20px;margin-top:1.5%;
}
/*this is css for innner sidebar*/
.maincontainer{
  width:100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding:2% 3%;
}
.container-equip{
  padding-left: 4%;
  overflow: none;
}

.con-equipname{
  padding:2% 4% 2% 4%;
  margin:1% 0 4% 0%;
  border-radius:4px;
  background-color: grey;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  float:left;
  display: inline-block;
  clear: both;
}
.con-equipname:hover{
  color:lightgrey;
}
.con-equipavail{
  padding:1% 3% 1% 3%;
  background-color: lightgrey;
  margin:2% 0 4% 0%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  text-align: center;
  float:left;
  display: inline-block;
}
/*css for inner-divs inside showbar-selected*/
/*For error msg in showbar*/
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
