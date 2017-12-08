<template>
  <div style="width:100%;">
		<div class="comp-logo-cont">
				<img class="comp-logo"
					 src="/src/assets/logo.png"/>
		</div>
		<div align="right">
			<span style="flex:1"></span>
			<md-button>LogOut</md-button>
			
			<md-avatar class="md-medium" style="background-color:white;">
			  <img src="/src/assets/logo.png" alt="People">
			</md-avatar>
		</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.comp-logo-cont{
	width:100%;
	padding-top:70px;
	text-align: center;
}
.comp-logo{
	width:70px;
	height:70px;
}
</style>