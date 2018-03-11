<template lang="html">
<div class="container">
  <h1>Log in... </h1>
  <div style="display:none">{{getUser}}</div>
  <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import {logIn} from '../helpers/authfunc'

export default {
    name: 'auth',
    mounted() {
        logIn()
    },
    computed:{
    	getUser(){
    		if(this.$store.getters.getUser)
    			this.$router.push('/profile')
    		return this.$store.getters.getUser
    	}
    }
}
</script>

<style lang="css">
</style>