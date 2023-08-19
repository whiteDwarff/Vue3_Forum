<template>
	<div>
		<h2>게시글 등록</h2>
		<hr class="my-4" />
		<form @submit.prevent>
			<div class="mb-3">
				<label for="title" class="form-label">Title</label>
				<input type="text" class="form-control" id="title" />
			</div>
			<div class="mb-3">
				<label for="contents" class="form-label">Contents</label>
				<textarea class="form-control" id="contents" rows="3"></textarea>
			</div>
			<div class="pt-4">
				<button @click="goList" type="button" class="btn btn-outline-dark me-2">
					Back
				</button>
				<button class="btn btn-primary">Submit</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goList = () => router.push({ name: 'PostList' });
</script>

<style lang="scss" scoped></style>
