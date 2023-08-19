<template>
	<div>
		<h2>내용</h2>
		<p>타이틀</p>
		<p class="text-muted">2022</p>
		<hr class="my-4" />
		<div class="row g-2">
			<div class="col-auto">
				<button class="btn btn-outline-dark">Prev</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-dark">Next</button>
			</div>
			<div class="col-auto me-auto"></div>
			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="goList">List</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-primary" @click="goEdit">Edit</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-danger">Delete</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
// url의 parameter 값을 가져오기 위함.
const route = useRoute();
const router = useRouter();
const goList = () => router.push({ name: 'PostList' });
const goEdit = () =>
	router.push({
		name: 'PostEdit',
		params: route.params.id,
	});
</script>

<style lang="scss" scoped></style>
