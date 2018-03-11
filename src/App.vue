<template>
  <div id="app">
  	<navbar></navbar>
  </div>
</template>

<script>
const navbar =()=>import('./components/navBar.vue') 
export default {
  name: 'app',
  components: {
    navbar,
  },
  computed:{
    getUser(){
      return this.$store.getters.getUser
    }
  },
  created(){
    this.$store.dispatch('setUser')
  }
}
</script>

<style src="vue-material/dist/vue-material.css"></style>
<style>
#app{
	width:100vw;
	height:100vh;
	overflow:hidden;
}
</style>