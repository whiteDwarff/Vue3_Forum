<template>
	<div>
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
					<button class="btn btn-primary">Edit</button>
				</slot>
			</template>
		</PostForm>
		<AppAlert :items="alerts"></AppAlert>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { updatePost, getPostsById } from '@/api/posts.js';
import { ref } from 'vue';
import PostForm from '@/components/posts/PostForm.vue';
import AppAlert from '@/components/AppAlert.vue';

const route = useRoute();
const router = useRouter();

const form = ref({
	title: null,
	contents: null,
});

const setForm = ({ title, contents }) => {
	form.value.title = title;
	form.value.contents = contents;
};
// 사용자의 게글 조회
const fetchPost = async () => {
	try {
		const { data } = await getPostsById(route.params.id);
		setForm(data);
	} catch (err) {
		console.log(err.message);
	}
};
fetchPost();

// 데이터 수정
const update = async () => {
	try {
		await updatePost(route.params.id, { ...form.value });
		vAlert('Update Success!', 'success');
		//router.push({ name: 'PostDetail', params: route.params.id });
	} catch (err) {
		vAlert(err.message);
		console.log(err);
	}
};

const goDetail = () =>
	router.push({
		name: 'PostDetail',
		params: route.params.id,
	});

//  alert
const alerts = ref([]);

const vAlert = (message, type = 'error') => {
	alerts.value.push({ message, type });
	setTimeout(() => {
		alerts.value.shift();
	}, 2000);
};
</script>

<style lang="scss" scoped></style>
