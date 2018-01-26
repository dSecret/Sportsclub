<template>
  <div class="wrap">
          <md-whiteframe md-elevation="3">
                <md-table>
                    <md-table-header>
                      <md-table-row>
                        <md-table-head>Roll#</md-table-head>
                        <md-table-head >RequestedOn</md-table-head>
                        <md-table-head >Status</md-table-head>
                        <md-table-head>Action</md-table-head>
                      </md-table-row>
                    </md-table-header>
                    <md-table-body>
                      <md-table-row v-for="tit in filt" v-if="reqs.length" :key="tit.id" >
                        <md-table-cell>{{tit.user}}</md-table-cell>
                        <md-table-cell>{{tit.date}}</md-table-cell>
                        <md-table-cell>{{tit.status}}</md-table-cell>
                        <md-table-cell 
                                        style="color:red;cursor:pointer;"
                                        >
                                        <div @click="overlay(tit)">Process</div>
                        </md-table-cell>

                      </md-table-row>
 
                    </md-table-body>
                </md-table>
                <div align="center" v-if="!reqs.length">
                    <md-spinner :md-size="60" 
                                md-indeterminate 
                                class="md-warn"
                          >
                    </md-spinner>
                </div> 
          </md-whiteframe>
        <overlayout :req="curr" v-on:reload="emittedEvent($event)"></overlayout>
  </div>
</template>

<script>
import overlayout from '../../components/services/overlayout.vue'
import firebase from 'firebase'
var dtb=firebase.database()
export default {
  components:{
    'overlayout':overlayout,
  },
  data () {
    return {
      curr:{id:'',user:'',date:'',cart:[],msg:'',status:'',reply:''},
      req:{id:'',user:'',date:'',cart:[],msg:'',status:'',reply:''},
      reqs:[],
    }
  },
  created(){
      this.loadReqs()
  },
  computed:{
     filt:function(){
          return this.reqs
     }
  },
  methods:{
    overlay:function(curr){
        this.curr=curr;
        document.getElementById('overdiv').style.height='100vh'
    },
    loadReqs:function(){
          var ref = dtb.ref("equipreqs/");
          var arry=[]
          var foo
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
              this.reqs=bar
          })
    },
    emittedEvent:function(foo){
        const index=this.reqs.indexOf(foo)
        this.reqs.splice(index,1);
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
