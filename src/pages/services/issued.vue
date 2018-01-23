<template>
  <md-whiteframe md-elevation="2" class="wrap">
                <md-table>
                    <md-table-header>
                      <md-table-row>
                        <md-table-head>Roll#</md-table-head>
                        <md-table-head >IssuedOn</md-table-head>
                        <md-table-head >Fine</md-table-head>
                        <md-table-head >Sport</md-table-head>
                        <md-table-head >Action</md-table-head>
                      </md-table-row>
                    </md-table-header>
                    <md-table-body>
                      <md-table-row v-for="(tit,index) in newissued" :key="index" v-if="equips.length" >
                        <md-table-cell>{{tit.user}}</md-table-cell>
                        <md-table-cell>{{tit.date}}</md-table-cell>
                        <md-table-cell>{{tit.fine}}</md-table-cell>
                        <md-table-cell>{{tit.sport}}/{{tit.equipname}}</md-table-cell>
                        <md-table-cell 
                                        style="color:red;cursor:pointer"
                                        >
                                        <div @click="openDialog('dialog1',tit.equip,tit.id,index)">
                                        Return</div>
                                        <!-- tit.equip,tit.id,index -->
                        </md-table-cell>
                      </md-table-row>
                    </md-table-body>
                </md-table>
                <div align="center" v-if="!equips.length">
                    <md-spinner :md-size="60" 
                                md-indeterminate 
                                class="md-warn"
                          >
                    </md-spinner>
                </div>
                <md-dialog md-open-from="#custom" md-close-to="#custom" ref="dialog1">
                  <md-dialog-title>Confirm Transaction</md-dialog-title>

                  <md-dialog-content>Proceed for return if fine is resolved</md-dialog-content>

                  <md-dialog-actions>
                    <md-button class="md-primary" @click="closeDialog('dialog1')">Cancel</md-button>
                    <md-button class="md-primary" @click="handleReturn('dialog1')">Return</md-button>
                  </md-dialog-actions>
                </md-dialog> 
  </md-whiteframe>
</template>

<script>
import firebase from 'firebase'
var dtb=firebase.database()
export default {
  data () {
    return {
      curr:{id:'',user:'',date:'',fine:0,equip:''},
      req:{id:'',user:'',date:'',fine:0,equip:''},
      issued:[{id:'',user:'',date:'',fine:0,equip:''}],
      equips:[],
      localfoo:'',
      localindex:0,
      localbar:''
    }
  },
  created(){
          var ref = dtb.ref("issuedequip/");
          var ref2 = dtb.ref("equipments/");
          var arry=[]
          var arry2=[]
          var foo
          var zoo
          foo=new Promise((resolve,reject)=>{
                  ref.on("value", function(snap) {
                    arry=[]
                    if(snap.val()){
                        let arrayOfkeys = Object.keys(snap.val()).sort().reverse();
                          arry = arrayOfkeys.map(key => snap.val()[key])
                        resolve(arry) 
                    }
                    else{
                      reject([])
                    }
                  });
          })
          foo.then((bar)=>{
              this.issued=bar
          })
          zoo=new Promise((resolve,reject)=>{
                  ref2.on("value", function(snapshot) {
                    arry2=[]
                    if(snapshot.val()){
                      for (let key in snapshot.val()) {
                        arry2.push(snapshot.val()[key])
                      }
                      resolve(arry2)
                    }
                    else{
                      reject([])
                    }
                  });
          })
          zoo.then((bar)=>{
              this.equips=bar
          })

  },
  computed:{
      newissued:function(){
          var bar=[]
              this.issued.forEach(e=>{
                        this.equips.forEach(c=>{
                              if(c.id===e.equip){
                                  e.equipname=c.equip
                                  e.sport=c.sport
                                  bar.push(e)
                              }
                        })
              })
              // console.log(bar)
          return bar
      }
  },
  methods:{
    getBack:function(foo,bar,index){
              var updates = {};
              var updatees2={}
                  this.equips.forEach(e=>{
                          if(e.id===foo){
                              e.rem=e.rem+1
                              updates['/equipments/'+ e.id] = e;
                          }
                  })
                  dtb.ref('/BUissuedequip/'+bar).update(this.issued[index])
                  dtb.ref().update(updates)
                  dtb.ref('/issuedequip/'+bar).remove()
                  this.issued.splice(index,1)
    },
    openDialog(ref,foo,bar,index) {
        this.localbar=bar
        this.localindex=index
        this.localfoo=foo
        this.$refs[ref].open();
    },
    closeDialog(ref) {
      this.$refs[ref].close();
    },
    handleReturn(ref){
      var t=this
      this.getBack(t.localfoo,t.localbar,t.localindex)
      this.$refs[ref].close();

    }
  }
}
</script>

<style scoped>

.wrap{
  margin-top:30px;
  background-color: white;
}
/*CSS for and inside overlay*/

</style>
