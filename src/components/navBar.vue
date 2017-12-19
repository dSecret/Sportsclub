<template>
  <div class="phone-viewport" id="phview">
      <md-whiteframe md-tag="md-toolbar" class="top-nav" md-elevation="3" >
        <div class="md-toolbar-container">
            <md-button class="md-icon-button" @click="toggleLeftSidenav">
                <md-icon>menu</md-icon>
            </md-button>
            <h2 class="md-display-1 mytitle" style="flex:1">
                  <router-link to='/' class="link-mytitle">
                   SportsClub {{admin}}
                   </router-link>
            </h2>
        </div>
      </md-whiteframe>
      <md-sidenav class="md-left" 
                  ref="leftSidenav"
      >
        <sidenavCurrUser  style="z-index:100;" 
                          v-on:closemenu="closeLeftSidenav()"
        >
        </sidenavCurrUser>
      </md-sidenav>
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
import {isLoggedIn,logOut,logIn,admin} from '../helpers/authfunc'
export default {
  components:{
      sidenavCurrUser,
  },
  data() {
    return {
      photo: '',
      userId: '',
      name: '',
      email: '',
      user: {},
      logged:null,
      admin:admin()

    }
  },
  computed:{
    
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
    toggleLeftSidenav() {
        // document.getElementById('phview').style.overflow='hidden'
      this.$refs.leftSidenav.toggle();
    },
    closeLeftSidenav() {
      this.$refs.leftSidenav.close();
    }
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
  overflow: hidden;
}
.top-nav{
  position:fixed;
  top:0;
  left:0;
  width:100vw;
  z-index:1;
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
  height:100vh;
  overflow-x: hidden;
}
.route-cont{
  width:50%;
  margin-top:10vh;
  margin:0 auto;
  padding:20px 0;
  margin-bottom:100px
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
