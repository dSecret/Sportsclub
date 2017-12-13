<template>
  <div class="wrap">
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
                      <md-table-row v-for="tit in newissued"  >
                        <md-table-cell>{{tit.user}}</md-table-cell>
                        <md-table-cell>{{tit.date}}</md-table-cell>
                        <md-table-cell>{{tit.fine}}</md-table-cell>
                        <md-table-cell>{{tit.sport}}/{{tit.equipname}}</md-table-cell>
                        <md-table-cell 
                                        style="color:red"
                                        >
                                        <div @click="getBack(tit.equip)">Return</div>
                        </md-table-cell>
                      </md-table-row>
                    </md-table-body>
                </md-table>
  </div>
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
      equips:[]
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
              console.log(bar)
          return bar
      }
  },
  methods:{
    getBack:function(foo){
              var updates = {};
                  this.equips.forEach(e=>{
                          if(e.id===foo){
                              e.rem=e.rem+1
                              updates['/equipments/'+ e.id] = e;
                          }
                  })
                  dtb.ref().update(updates)
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
