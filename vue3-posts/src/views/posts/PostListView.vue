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
		<AppLoading v-if="loading" />
		<AppError v-else-if="error" :message="error" />
		<template v-else>
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
		</template>

		<AppPagenation
			:currentPage="params._page"
			:pageCount="pageCount"
			@page="page => (params._page = page)"
		/>
		<hr class="my-5" />
		<!-- teleport : component를 특정 DOM으로 이동시킬 경우 사용 -->
		<teleport to="#modal">
			<PostModal
				v-model="show"
				:title="modalTitle"
				:contents="modalContents"
				:createdAt="modalCreatedAt"
		/></teleport>
	</div>
</template>

<script setup>
import AppLoading from '@/components/app/AppLoading.vue';
import AppError from '@/components/app/AppError.vue';
import PostItem from '@/components/posts/PostItem.vue';
import PostFilter from '@/components/posts/PostFilter.vue';
import PostModal from '@/components/posts/PostModal.vue';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAxios } from '@/composables/useAxios';

// ----------------------------------------------------
const params = ref({
	_sort: 'createdAt',
	_order: 'desc',
	_page: 1,
	_limit: 3,
	title_like: '',
});
// paginataion
const totalCount = computed(() =>
	response.value ? response.value.headers['x-total-count'] : null,
);
const pageCount = computed(() =>
	// Math.ceil() : 반올림
	Math.ceil(totalCount.value / params.value._limit),
);
const {
	data: posts,
	error,
	loading,
	response,
} = useAxios('/posts', { method: 'get', params });
// ----------------------------------------------------
const router = useRouter();
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
};
// ----------------------------------------------------
</script>

<style lang="scss" scoped></style>
