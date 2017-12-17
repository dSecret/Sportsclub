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
                      <md-table-row v-for="tit in filt" v-if="reqs.length" >
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
        <overlayout :req="curr"></overlayout>
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
          var ref = dtb.ref("equipreqs/");
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
              this.reqs=bar
          })
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
