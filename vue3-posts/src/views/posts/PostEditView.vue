<template>
	<AppLoading v-if="loading" />
	<AppError v-else-if="error || editError" :message="error || editError" />
	<div v-else>
		<h2>게시글 수정</h2>
		<hr class="my-4" />
		<PostForm
			v-model:title="form.title"
			v-model:contents="form.contents"
			@submit.prevent="update"
		>
			<template #actions>
				<slot>
					<button
						@click="goDetail"
						type="button"
						class="btn btn-outline-danger"
					>
						Cancle
					</button>
					<template v-if="editLoading">
						<!-- loading button  -->
						<button class="btn btn-primary" :disabled="editLoading">
							<span
								class="spinner-border spinner-border-sm"
								aria-hidden="true"
							></span>
							<span class="visually-hidden" role="status">Loading...</span>
						</button>
					</template>
					<button v-else class="btn btn-primary">Edit</button>
				</slot>
			</template>
		</PostForm>
	</div>
</template>

<script setup>
import AppLoading from '@/components/app/AppLoading.vue';
import AppError from '@/components/app/AppError.vue';
import { useRoute, useRouter } from 'vue-router';
import { updatePost } from '@/api/posts.js';
import { ref } from 'vue';
import PostForm from '@/components/posts/PostForm.vue';
import useAlert from '@/composables/alert.js';
import { useAxios } from '@/composables/useAxios';

// ----------------------------------------------------
const editError = ref(null);
const editLoading = ref(false);
// ----------------------------------------------------
const route = useRoute();
const router = useRouter();
const { vAlert, vSuccess } = useAlert();

const { data: form, error, loading } = useAxios(`posts/${route.params.id}`);

// 데이터 수정
const update = async () => {
	try {
		editLoading.value = true;
		await updatePost(route.params.id, { ...form.value });
		vSuccess('Update Success!');
		router.push({ name: 'PostDetail', params: route.params.id });
	} catch (err) {
		editError.value = err.message;
		vAlert(err.message);
	} finally {
		editLoading.value = false;
	}
};

const goDetail = () =>
	router.push({
		name: 'PostDetail',
		params: route.params.id,
	});
</script>

<style lang="scss" scoped></style>
