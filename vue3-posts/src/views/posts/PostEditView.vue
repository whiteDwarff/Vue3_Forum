<template>
	<div>
		<h2>게시글 수정</h2>
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
				<button
					@click="goDetail"
					type="button"
					class="btn btn-outline-danger me-2"
				>
					Cancle
				</button>
				<button class="btn btn-primary">Edit</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const goDetail = () =>
	router.push({
		name: 'PostDetail',
		params: route.params.id,
	});
</script>

<style lang="scss" scoped></style>
