<template lang="html">
<div class="container">
  <h1>Log in... </h1>
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