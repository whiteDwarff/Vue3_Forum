<template>
	<div>
		<AppError v-if="error" :message="error" />
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
					<template v-if="loading">
						<!-- loading button  -->
						<button class="btn btn-primary" :disabled="loading">
							<span
								class="spinner-border spinner-border-sm"
								aria-hidden="true"
							></span>
							<span class="visually-hidden" role="status">Loading...</span>
						</button>
					</template>
					<button v-else class="btn btn-primary">Submit</button>
				</slot>
			</template>
		</PostForm>

		<AppAlert :items="alerts"></AppAlert>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useAxios } from '@/composables/useAxios';
import PostForm from '@/components/posts/PostForm.vue';
import AppError from '@/components/app/AppError.vue';
import useAlert from '@/composables/alert.js';

// ----------------------------------------------------
const router = useRouter();
const { vAlert, vSuccess } = useAlert();

const form = ref({
	title: null,
	contents: null,
});
// ----------------------------------------------------
const visibleForm = ref(true);
const goList = () => router.push({ name: 'PostList' });

// ----------------------------------------------------

const { error, loading, excute } = useAxios(
	'/posts',
	{
		method: 'post',
	},
	{
		immediate: false,
		onSuccess: () => {
			router.push({ name: 'PostList' });
			vSuccess('Successed Post!!');
		},
		onError: err => {
			vAlert(err.message);
		},
	},
);
const save = async () => {
	excute({ ...form.value, createdAt: Date.now() });
};
</script>

<style lang="scss" scoped></style>
