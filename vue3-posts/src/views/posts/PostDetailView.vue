<template>
	<AppLoading v-if="loading" />
	<AppError v-else-if="error || removeError" :message="error || removeError" />
	<div v-else>
		<h2>{{ post.title }}</h2>
		<p>{{ post.contents }}</p>
		<p class="text-muted">
			{{ $dayjs(post.createdAt).format('YYYY.MM.DD. HH:mm') }}
		</p>
		<hr class="my-4" />
		<div class="row g-2">
			<!-- <div class="col-auto">
				<button class="btn btn-outline-dark">Prev</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-dark">Next</button>
			</div> -->
			<div class="col-auto me-auto"></div>
			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="goList">List</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-primary" @click="goEdit">Edit</button>
			</div>
			<template v-if="removeLoading">
				<div class="col-auto">
					<!-- loading button  -->
					<button class="btn btn-outline-danger" :disabled="removeLoading">
						<span
							class="spinner-border spinner-border-sm"
							aria-hidden="true"
						></span>
					</button>
				</div>
			</template>
			<div v-else class="col-auto">
				<button @click="remove" class="btn btn-outline-danger">Delete</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import AppLoading from '@/components/app/AppLoading.vue';
import AppError from '@/components/app/AppError.vue';
import useAlert from '@/composables/alert.js';
import { useRouter } from 'vue-router';
import { useAxios } from '@/composables/useAxios';
import { computed } from 'vue';
const props = defineProps({
	id: [String, Number],
});
const router = useRouter();
const { vAlert, vSuccess } = useAlert();

// ----------------------------------------------------
const url = computed(() => `/posts/${props.id}`);
console.log(url.value);
const { data: post, error, loading } = useAxios(url);
// ----------------------------------------------------
const {
	error: removeError,
	loading: removeLoading,
	excute,
} = useAxios(
	`/posts/${props.id}`,
	{ method: 'delete' },
	{
		immediate: false,
		onSuccess: () => {
			vSuccess('Successed Delete');
			router.push({ name: 'PostList' });
		},
		onError: err => vAlert(err.message),
	},
);
// 현재 게시글 삭제
const remove = async () => {
	if (confirm('삭제하시겠습니까?')) excute();
};
// ----------------------------------------------------
// 목록화면으로 이동
const goList = () => router.push({ name: 'PostList' });
// 수정화면으로 이동
const goEdit = () =>
	router.push({
		name: 'PostEdit',
		params: props.id,
	});
// ----------------------------------------------------
/*
	- ref()로 선언 :
		객체 할당을 할 수 있음 *
		value에 접근 시 form.value.title, form.value.contents로 접근방식이 번거로움

	- reactive() : 
		객체할당이 되지 않음, 반응형 데이터로 할당되지 않음.
		form.title, form.contents로 한번에 접근 가능
*/
</script>

<style lang="scss" scoped></style>
