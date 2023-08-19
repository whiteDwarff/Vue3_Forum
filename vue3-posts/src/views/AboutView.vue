<template>
	<div>
		<h2>home view</h2>
		<p>{{ $route.path }}</p>
		<button class="btn btn-primary" @click="$router.push('/')">GO HOME</button>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
// ------------------------------------------
// setup() 내에서 route 정보를 사용
const route = useRoute();
console.log(route.path);
// ------------------------------------------
</script>

<style lang="scss" scoped></style>
