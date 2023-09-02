<template>
	<div>
		<h2 @click="visibleForm = !visibleForm">게시글 등록</h2>
		<hr class="my-4" />
		<PostForm
			v-if="visibleForm"
			v-model:title="form.title"
			v-model:contents="form.contents"
			@submit.prevent="save"
		>
			<template #actions>
				<slot>
					<button
						@click="goList"
						type="button"
						class="btn btn-outline-dark me-2"
					>
						Back
					</button>
					<button class="btn btn-primary">Submit</button>
				</slot>
			</template>
		</PostForm>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { createePost } from '@/api/posts.js';
import { ref } from 'vue';
import PostForm from '@/components/posts/PostForm.vue';

const router = useRouter();
const form = ref({
	title: null,
	contents: null,
});
const visibleForm = ref(true);
const goList = () => router.push({ name: 'PostList' });
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
