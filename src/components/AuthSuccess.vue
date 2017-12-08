<template>
  <div>
  <div class="container">
    <!-- {{user}} -->
    <h1>AuthSuccess</h1>
    <md-button @click="logOut">Logout</md-button>
  </div>
  </div>
</template>

<script>
import {isLoggedIn,logOut} from '../helpers/authfunc'




export default {
  data() {
    return {
      photo: '',
      userId: '',
      name: '',
      email: '',
      user: {},
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
    
  },


};
</script>