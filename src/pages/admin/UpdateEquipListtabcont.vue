<template>
  <div class="container-wrap">
    <md-card class="cus-card">
          <md-card-header>
            <div class="md-title">Update Equipments List</div>
          </md-card-header>
          <md-card-actions>
              <md-input-container style="width:150px;margin-right:15px;">
                <label for="movie">Existing</label>
                <md-select  name="movie" 
                            v-model="updatelist.sport"
                            @selected="uptype('exist')"
                            @change="eqls(updatelist.sport)"
                >
                  <md-option  v-for="sport in spls"
                              :value="sport"
                              :key="sport"
                  >       
                      {{sport}}
                  </md-option>
                </md-select>
              </md-input-container>
              <md-input-container style="width:150px;margin-right:15px;" 
                                  v-if="equipstat"
              >
                <label for="movie">Equipments</label>
                <md-select  name="equip" 
                >
                  <md-option  v-for="sport in equips"
                              :value="sport.equip"
                              @selected="fetchSel(sport)"
                              :key="sport.equip"
                  >       
                      {{sport.equip}}
                  </md-option>
                </md-select>
              </md-input-container>
              <md-button class="md-primary md-raised"
                          @click="uptype('newup')"
              >
                  New
              </md-button>
          </md-card-actions>
          <md-card-content v-if="start">
              <md-input-container>
                <label>Sport</label>
                <md-input type="text" v-model="updatelist.sport"></md-input>
                <md-icon>rowing</md-icon>
              </md-input-container>
              <md-input-container>
                  <label>Equipment</label>
                  <md-input type="text" v-model="updatelist.equip"></md-input>
                  <md-icon>toys</md-icon>
              </md-input-container>
              <md-input-container>
                  <label>Total</label>
                  <md-input type="number" v-model="updatelist.total"></md-input>
              </md-input-container>
          </md-card-content>

          <md-card-actions v-if="start">
            <md-button @click="addSel">SaveEdits</md-button>
          </md-card-actions>
    </md-card>
  </div>
</template>

<script>
import firebase from 'firebase'
var dtb=firebase.database()


export default {

  data () {
    return {
        updatelist:{sport:'',equip:'',total:0,id:'',rem:0},
        stat:true,
        start:false,
        epls:[{sport:'',equip:'',total:0,id:'',rem:0}],
        equips:[],
        equipstat:false
    }
  },
  computed:{
    spls:function(){
        var foo=[]
            this.epls.forEach((e)=>{
                        foo.push(e.sport)
            })
        var bar=Array.from(new Set(foo))
        console.log(bar)
        return  bar
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
              this.epls=bar
          })
  },
  methods:{
    cancel:function(){
      this.updatelist={sport:'',equip:'',total:0,id:'',rem:0}
    },
    fetchSel:function(foo){
      this.updatelist=foo
    },
    addSel:function(){
          if(this.stat) {
                var postsend={sport:'',equip:'',total:0,id:'',rem:0}
                var newPostKey = dtb.ref().child('equipments').push().key;
                    this.updatelist.id=newPostKey
                    this.updatelist.rem=this.updatelist.total
                var updates = {};
                    updates['/equipments/' + newPostKey] = this.updatelist;
                    // this.updatelist=postsend
                    this.start=false
                return dtb.ref().update(updates);
          }
          else{
              let foo=this.updatelist
                  this.start=false
                  this.updatelist.rem=this.updatelist.total
              return dtb.ref('equipments/'+ foo.id).set(foo)
          }
    },
    uptype:function(foo){
        if(foo==='exist'){
            this.stat=false
            return this.start=true
        }
        else if(foo==='newup'){
            this.stat=true
            return this.start=true
        }
        else
          return this.start=false
    },
    eqls:function(sport){
        this.equipstat=false
        this.updatelist.equip=''
        this.equips=[]
        var foo=this.epls.filter(e=>{
                   return e.sport===sport
                })
          this.equips=foo  
        return this.equipstat=true
    }
  }
}
</script>

<style scoped>
.container{
  background-color:white;
  width:100%;
  margin: auto;
  padding:20px;
  border-radius:4px;
  margin-top:10vh;
}
.cus-card{
  border-radius:5px;
}
/*@media only screen and (max-width:6in){
  .container{
    width:100%;
  }
}*/
</style>
