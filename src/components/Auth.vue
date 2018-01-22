<template lang="html">
<div class="container">
  <h1> Auth </h1>
  <h2><router-link to="/">Home</router-link></h2>
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
}
</script>

<style lang="css">
</style>