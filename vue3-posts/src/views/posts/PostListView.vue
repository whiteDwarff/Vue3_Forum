<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />
		<div class="row g-3">
			<div class="col-4" v-for="post in posts" :key="post.id">
				<PostItem
					:title="post.title"
					:contents="post.contents"
					:createdAt="post.createdAt"
					@click="goDetail(post.id)"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import { getPosts } from '@/api/posts.js';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// ----------------------------------------------------
const posts = ref([]);
const fetchPosts = () => {
	posts.value = getPosts();
};
fetchPosts();
// ----------------------------------------------------
const router = useRouter();
// const goDetail = id => router.push(`/posts/${id}`);
const goDetail = id => {
	router.push({
		name: 'PostDetail',
		params: {
			id,
		},
	});
};
// ----------------------------------------------------
</script>

<style lang="scss" scoped></style>
