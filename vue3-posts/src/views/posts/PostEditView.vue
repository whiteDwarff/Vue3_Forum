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
import PostForm from '@/components/posts/PostForm.vue';
import useAlert from '@/composables/alert.js';
import { useAxios } from '@/composables/useAxios';

// ----------------------------------------------------
const route = useRoute();
const router = useRouter();
const id = route.params.id;
const { vAlert, vSuccess } = useAlert();

// ----------------------------------------------------
// component에 진입 시 데이터를 불러오는 로직
const { data: form, error, loading } = useAxios(`posts/${id}`);
// ----------------------------------------------------
const {
	error: editError,
	loading: editLoading,
	excute,
} = useAxios(
	// axios의 url
	`posts/${id}`,
	// axios의 config, method 요청
	{ method: 'patch' },
	{
		immediate: false,
		onSuccess: () => {
			vSuccess('Successed Update!!');
			router.push({ name: 'PostDetail', params: { id } });
		},
		onError: err => {
			vAlert(err.message);
		},
	},
);
// ----------------------------------------------------
// excute : useAxios에서 할당받은 method
// submit event를 처리하기 위함. (비동기)
const update = () => {
	excute({
		...form.value,
	});
	// router.push({ name: 'PostDetail', params: { id } });
};
// ----------------------------------------------------
const goDetail = () =>
	router.push({
		name: 'PostDetail',
		params: id,
	});
</script>
