<template>
	<div>
		<h2>{{ post.title }}</h2>
		<p>{{ post.contents }}</p>
		<p class="text-muted">{{ post.createdAt }}</p>
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
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { getPostsById } from '@/api/posts.js';
const props = defineProps({
	id: Number,
});
// ----------------------------------------------------
// url의 parameter 값을 가져오기 위함.
//const route = useRoute();

const router = useRouter();
const post = ref({});

// ----------------------------------------------------
// 구조분해할당을 사용하여 데이터 주입
const setPost = ({ title, contents, createdAt }) => {
	post.value.title = title;
	post.value.contents = contents;
	post.value.createdAt = createdAt;
};
// 데이터 호출
const fetchPost = async () => {
	const { data } = await getPostsById(props.id);
	setPost(data);
};

fetchPost();

// ----------------------------------------------------
// 목록화면으로 이동
const goList = () => router.push({ name: 'PostList' });
// 수정화면으로 이동
const goEdit = () =>
	router.push({
		name: 'PostEdit',
		params: props.id,
	});
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
