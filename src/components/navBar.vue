<template>
  <div class="phone-viewport">
      <md-toolbar class="top-nav"  >
        <div class="md-toolbar-container">
            <h2 class="md-display-1 mytitle" style="flex:1">
                  <router-link to='/' class="link-mytitle">
                   SportsClub
                   </router-link>
            </h2>
            <router-link tag="md-button" 
                        to="/login"
                        v-if="logStat"
                        >
                      LogIn
            </router-link>
                  <md-menu md-direction="bottom left" v-if="user.email">
                    <md-button md-menu-trigger class="md-icon-button">
                        <md-avatar style="padding:0;margin:-8px 0 0 -8px;" class="img-cont">
                            <img :src="user.photoUrl" alt="Avatar" class="img">
                        </md-avatar>
                    </md-button>
                    <md-menu-content>
                      <md-menu-item><router-link to='/profile'>Profile</router-link></md-menu-item>
                      <md-menu-item @click="logOut">LogOut</md-menu-item>
                    </md-menu-content>
                  </md-menu>
        </div>
      </md-toolbar>
      <div style="height:10vh;width:100vw;" id="scrollTop">
      </div>
      <div class="route-cont-wrap">
          <div class="route-cont">
            <router-view></router-view>
          </div>
      </div>

  </div>
</template>

<script>
const  sidenavCurrUser=()=>import('./sidenavCurrUser.vue')
import {isLoggedIn,logOut,logIn} from '../helpers/authfunc'

export default {
  components:{
      sidenavCurrUser
  },
  data() {
    return {
      photo: '',
      userId: '',
      name: '',
      email: '',
      user: {},
      logged:null

    }
  },
  computed:{
    // isLoggedIn().then(userinfo => {
    //   this.user=userinfo
    // })
    logStat(){
      if(!this.user.email && this.$route.path!='/login'){
          return true
      }
      else return false
    }
  },
  created() {
       isLoggedIn().then(userinfo => {
      this.user=userinfo
    })
  },
  methods: {
    logOut() {
      logOut()
    },
    logIn(){
      logIn()
    },

  },
};
</script>

<style scoped>
.img-cont{
  background-color: white;
  /*padding:2px;*/
  border:2px solid white;
}

.phone-viewport{
  /*background: none;*/
  position:fixed;
  top:0;
  left:0;
  width:100vw;
  height:100vh;
  overflow-x: hidden;
}
.top-nav{
  position:fixed;
  top:0;
  left:0;
  width:100vw;
  z-index:100;
  background-color:#03A9F4 !important;
        /*background-image: linear-gradient(180deg, hsl(200, 81%, 30%) 0%, #2AF598 100%) !important;*/
}
.link-mytitle{
  text-decoration: none !important;
  color:white !important;
}
.mytitle{
  flex:1 !important;
  font-family: 'Ubuntu', sans-serif !important;
  margin-left: 0;
}
.route-cont-wrap{
  width:100vw;
  overflow-x: hidden;
}
.route-cont{
  width:50%;
  margin-top:10vh;
  margin:0 auto;
  padding:20px 0;
  overflow: hidden;
}
@media only screen and (max-width:7in){
  .route-cont{
    width:98%;
  }
}
@media only screen and (min-width:7in) and (max-width:9in){
  .route-cont{
    width:90%;
  }
}
@media only screen and (min-width:9in) and (max-width:10in){
  .route-cont{
    width:80%;
  }
}
</style>
