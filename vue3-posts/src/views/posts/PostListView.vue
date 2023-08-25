<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />

		<PostFilter
			@submit.prevent=""
			v-model:title="params.title_like"
			v-model:limit="params._limit"
		/>
		<hr class="my-4" />

		<AppGrid :items="posts">
			<template v-slot="{ item }">
				<PostItem
					:title="item.title"
					:contents="item.contents"
					:createdAt="item.createdAt"
					@click="goDetail(item.id)"
					@modal="openModal(item)"
				/>
			</template>
		</AppGrid>

		<AppPagenation
			:currentPage="params._page"
			:pageCount="pageCount"
			@page="page => (params._page = page)"
		/>
		<hr class="my-5" />
		<PostModal
			v-model="show"
			:title="modalTitle"
			:contents="modalContents"
			:createdAt="modalCreatedAt"
		/>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import AppPagenation from '@/components/AppPagenation.vue';
import AppGrid from '@/components/AppGrid.vue';
import PostFilter from '@/components/posts/PostFilter.vue';
import PostModal from '@/components/posts/PostModal.vue';
import { getPosts } from '@/api/posts.js';
import { computed, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

// ----------------------------------------------------
const posts = ref([]);
const params = ref({
	_sort: 'createdAt',
	_order: 'desc',
	_page: 1,
	_limit: 3,
	title_like: '',
});
// paginataion
const totalCount = ref(0);
const pageCount = computed(() =>
	// Math.ceil() : 반올림
	Math.ceil(totalCount.value / params.value._limit),
);
const fetchPosts = async () => {
	// ({ data: posts.value } = await getPosts());
	const { data, headers } = await getPosts(params.value);
	console.dir(data);
	try {
		posts.value = data;
		totalCount.value = headers['x-total-count'];
	} catch (err) {
		console.log(err);
	}
};
// watchEffect : 반응형의 상태가 변경되었을 때 다시 실행
watchEffect(fetchPosts);
// fetchPosts();
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
const modalTitle = ref('');
const modalContents = ref('');
const modalCreatedAt = ref('');

const show = ref(false);
const openModal = ({ title, contents, createdAt }) => {
	show.value = true;
	modalTitle.value = title;
	modalContents.value = contents;
	modalCreatedAt.value = createdAt;
	console.log(show.value);
};
</script>

<style lang="scss" scoped></style>
