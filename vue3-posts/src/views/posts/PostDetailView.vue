<template>
	<div>
		<h2>{{ form.title }}</h2>
		<p>{{ form.contents }}</p>
		<p class="text-muted">{{ form.createdAt }}</p>
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
import { getPostById } from '@/api/posts';
import { ref } from 'vue';

const props = defineProps({
	id: Number,
});
// ----------------------------------------------------
// url의 parameter 값을 가져오기 위함.
//const route = useRoute();
const router = useRouter();
/*
	- ref()로 선언 :
		객체 할당을 할 수 있음 *
		value에 접근 시 form.value.title, form.value.contents로 접근방식이 번거로움

	- reactive() : 
		객체할당이 되지 않음, 반응형 데이터로 할당되지 않음.
		form.title, form.contents로 한번에 접근 가능
*/
const form = ref({});

// ----------------------------------------------------
const goList = () => router.push({ name: 'PostList' });
const goEdit = () =>
	router.push({
		name: 'PostEdit',
		params: props.id,
	});
console.log(getPostById(props.id));
const fetchPost = () => {
	/*
		reactive로 선언할 경우
		form.title = data.title
		form.contents = data.contents
	*/
	const data = getPostById(props.id);
	form.value = { ...data };
};
fetchPost();
</script>

<style lang="scss" scoped></style>
