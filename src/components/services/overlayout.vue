<template>
  <div id="overdiv"class="overlay-container">
        <div class="closebtn-cont">
            <span class="closebtn" @click="closediv">&times;</span>
        </div>
        <md-whiteframe md-elevation="2" class="content-container">
              <div class="querytimeline">
                  <div class="even" >{{req.user}}</div>
                  <div class="even">{{req.date}}</div>
              </div>
              <div class="querytimeline" style="padding:1%;">
                  <div class="title-cart">Requested Equipments</div>
                  <md-chip  
                            style="margin:5px 3px;"
                            v-for="tit in equips"
                  >
                                  {{tit.equip}}
                  </md-chip>
              </div>
              <div v-if="req.status!=='Ok'" class="querytimeline">
                    <div class="querytimeline" style="padding:1%;">
                        <div class="req-msg">
                            {{req.msg}}
                        </div>
                        <div class="msg-by">
                            @ {{req.user}}
                        </div>
                    </div>
                    <div class="querytimeline" style="padding:1%;">
                        <div>
                          <md-input-container>
                              <label>Add when he can collect these items</label>
                              <md-textarea  class="text-area"
                                            v-model="reply"
                              >
                                
                              </md-textarea>
                              <md-icon>create</md-icon>
                          </md-input-container>
                        </div>
                        <div style="text-align:right;">
                              <md-button  class="md-primary md-raised"
                                          @click="reactReq(1)"
                              >
                                ConfirmReq
                              </md-button>
                              <md-button  class="md-primary" 
                                          @click="reactReq(0)"
                              >
                                  CancelReq
                              </md-button>
                        </div>
                    </div>
              </div>
              <div v-if="req.status==='Ok'" class="querytimeline">
                    <div style="text-align:right;">
                              <md-button  class="md-warm md-raised"
                                          @click="updateII(equips)"
                              >
                                HandOver
                              </md-button>
                    </div>
              </div>
        </md-whiteframe>
  </div>
</template>

<script>
import firebase from 'firebase'
var dtb=firebase.database()
export default {
  props:['req'],
  data () {
    return {
      selectedcart:[
        'SS-Bat','Cosco-Ball','Dues-Ball','Knee-Pad'
      ],
      reply:'',
      issuedlist:[],
      equipnames:[],
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
              console.log(bar[0].sport)
          })
    },
    computed:{
        equips:function(){
            var foo=[]
                this.equipnames.forEach(e=>{
                    this.req.cart.forEach(c=>{
                        if(c===e.id){
                            foo.push(e)
                        }
                    })
                })
                console.log('foo',foo.length)
            return foo
        }
    },
    methods:{
    closediv:function(){
        document.getElementById('overdiv').style.height='0vh'
    },
    reactReq:function(foo){
              var bar={id:'',user:'',date:'',cart:[],msg:'',status:'',reply:''}
                  bar=this.req
                  bar.reply=this.reply
              if(foo){
                    bar.status='Ok'
                    this.updateIL(this.equips)
              }
              else{
                    bar.status='Cancel'
              }
              var updates = {};
                  updates['/equipreqs/'+ bar.id] = bar;
                  this.closediv()
                  return dtb.ref().update(updates);
    },
    updateIL:function(foo){
              var bar={}
              var updates = {};
              foo.forEach(e=>{
                    bar=e
                    bar.rem=bar.rem-1
                    updates['/equipments/'+ bar.id] = bar;
                    dtb.ref().update(updates)
              })
    },
    updateII:function(foo){
              var bar={id:'',user:'',date:'',fine:0,equip:''}
              var updates = {};
              foo.forEach(e=>{
                    bar.user=this.req.user
                    bar.date=new Date()
                    bar.equip=e.id

                var newKey=dtb.ref().child('issuedequip').push().key
                    bar.id=newKey
                    updates['/issuedequip/'+ newKey] = bar;
                    dtb.ref().update(updates)
                    bar={id:'',user:'',date:'',fine:0,equip:''}
                    dtb.ref('/activity/'+this.req.user+'/issued/'+newKey).update({id:newKey})
              })
              dtb.ref('/equipreqs/'+this.req.id).remove()
              this.closediv()
    }
  }
}
</script>

<style scoped>
.data-container{
  text-align: center;
  width:100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  border-left:2px solid black;
  margin-top:1px;
  font-size:16px;

}
.even{
  background-color:#e5e8e8;
  padding:8px 1%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  overflow-x:auto;
  overflow-y: hidden;
}
.overlay-container{
  height:0vh;
  width:100vw;
  z-index:15000;
  transition:0.5s;
  position:fixed;
  bottom:0;
  left:0;
  overflow-y: scroll;
  overflow-x:hidden;
  background-color: rgba(0,0,0, 0.9);
}
.closebtn-cont{
  width:100%;
  text-align: right;
}
.closebtn{
  margin-top:4%;margin-right:7%;
  font-size:50px;display:inline-block;
  color:grey;
}
.closebtn:hover{
  color:white;
}
.content-container{
  color:black;
  width:60%;
  margin:0 20% 3% 20%;
  display: block;
  background-color: white;
  box-sizing: border-box;
  z-index: 2;
  position: relative;
  -moz-box-sizing: border-box;
  padding:2% 2% 2% 2%;
}
/*CSS for inside content-container*/
.querytimeline{
  width:100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  border-left:2px solid black;
  background-color: #d5dbdb;
  padding:0%;
  margin:8px 0 8px 0;
}
.title-cart{
  width:100%;font-size:15px;
  border-bottom:1px solid grey;
}
.sel-box{
  position:relative;
  background-color: grey;
  color:white;display:inline-block;margin-right:13px;margin-top: 13px;
  padding:4px 7px;font-size:13px;
}
.req-msg{
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding:5px 0 5px 5px;
  width:100%;font-size:14px;
  background-color:white;
}
.msg-by{
  text-align: right;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding:5px 0 5px 5px;
  width:100%;font-size:14px;
}
/*css of textarea*/
.text-area{
  rows:2!important;font-size:15px !important;
}
/**/
.reqbut{
  outline:none;
  border:none;
  box-shadow:0 1px 3px 1px grey;
  padding:0.5% 1%;
  border-radius:2px;
  cursor: pointer;
  margin-left:1.6%;
  font-weight: bolder;
  color:#212f3d ;
  transition:0.5s;
  overflow-x: hidden;
  box-sizing: border-box;
-moz-box-sizing: border-box;
  display: inline-block;
}
#confirm:hover{
  color:white;
}
#cancel:hover{
  color:red;
}
@media only screen and (max-width:5.5in){
  .content-container{
    width:98%;
    margin:0 1% 3% 1%;}
    .closebtn{
      margin-right: 1%;
    }
}
@media only screen and (max-width:10in) and (min-width:5.5in){
  .content-container{
    width:90%;
    margin:0 5% 3% 5%;}
    .closebtn{
      margin-right: 3%;
    }
}
</style>
