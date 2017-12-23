<template>
	<div>
		<interest></interest>
	</div>

</template>

<script>
const interest =()=> import('../../components/interest.vue')
export default {
	components:{
		interest
	}
}
</script>