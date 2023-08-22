<template>
	<div>
		<h2>게시글 등록</h2>
		<hr class="my-4" />
		<form @submit.prevent="save">
			<div class="mb-3">
				<label for="title" class="form-label">Title</label>
				<input
					v-model="form.title"
					type="text"
					class="form-control"
					id="title"
				/>
			</div>
			<div class="mb-3">
				<label for="contents" class="form-label">Contents</label>
				<textarea
					v-model="form.contents"
					class="form-control"
					id="contents"
					rows="3"
				></textarea>
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
import { createePost } from '@/api/posts.js';
import { ref } from 'vue';

const router = useRouter();
const goList = () => router.push({ name: 'PostList' });

const form = ref({
	title: null,
	contents: null,
});
const save = async () => {
	try {
		await createePost({
			...form.value,
			createdAt: Date.now(),
		});
		router.push({ name: 'PostList' });
	} catch (err) {
		console.log(err);
	}
};
</script>

<style lang="scss" scoped></style>
