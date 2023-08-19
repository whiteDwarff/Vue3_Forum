<template>
	<div>
		<h2>about view</h2>
		<button class="btn btn-primary" @click="goAboutPage">GO ABOUT</button>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
// ------------------------------------------
// setup() 내에서 router를 이동하는 method 선언
const router = useRouter();
const goAboutPage = () => router.push('/about');
</script>

<style lang="scss" scoped></style>
