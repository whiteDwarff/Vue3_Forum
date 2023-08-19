// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	// {
	// 	path: '/',
	// 	redirect: '/home',
	// },
	{
		path: '/',
		name: 'home',
		// component: HomeView,
		component: () => import('@/views/HomeView.vue'),
	},
	{
		path: '/about',
		name: 'about',
		// component: AboutView,
		component: () => import('@/views/AboutView.vue'),
	},
	{
		path: '/posts',
		name: 'PostList',
		component: () => import('@/views/posts/PostListView.vue'),
	},
	{
		path: '/posts/create',
		name: 'PostCreate',
		component: () => import('@/views/posts/PostCreateView.vue'),
	},
	{
		// 동적 컴포넌트 매핑, 다양한 정보를 랜더링할 수 있음.
		// 달라지는 값을 :로 설정할 수 있음.
		path: '/posts/:id',
		name: 'PostDetail',
		component: () => import('@/views/posts/PostDetailView.vue'),
	},
	{
		path: '/posts/:id/edit',
		name: 'PostEdit',
		component: () => import('@/views/posts/PostEditView.vue'),
	},
];
const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
