<template>
	<div>
		<dashboard></dashboard>
	</div>

</template>

<script>
const  dashboard =()=>import('../../components/dashboard.vue')

export default {
	components:{
		dashboard
	}
}
</script>