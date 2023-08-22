// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
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
	// --------------------------------------------------------------
	// post
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
		// posts/:id의 id값이 해당 컴포넌트의 props로 전달
		//props: true,
		props: route => ({ id: parseInt(route.params.id) }),
	},
	{
		path: '/posts/:id/edit',
		name: 'PostEdit',
		component: () => import('@/views/posts/PostEditView.vue'),
	},
	// --------------------------------------------------------------
	// 중첩 라우터 사용, children
	{
		path: '/nested',
		name: 'Nested',
		component: () => import('@/views/nested/NesdtedView.vue'),
		children: [
			{
				path: '',
				name: 'NestedDefault',
				component: () => import('@/views/nested/NestedOneView.vue'),
			},
			{
				// children의 path에는 / 생략
				path: 'one',
				name: 'NestedOne',
				component: () => import('@/views/nested/NestedOneView.vue'),
			},
			{
				path: 'two',
				name: 'NestedTwo',
				component: () => import('@/views/nested/NestedTwoView.vue'),
			},
		],
	},
	// --------------------------------------------------------------
	// 유효한 path 값이 없을 경우 NotFound 페이지로 이동
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: () => import('@/views/NotFoundView.vue'),
	},
];
const router = createRouter({
	// #이 붙지 않음, 웹 배포 시 사용
	history: createWebHistory('/'),
	// SEO 노출에 최적화 되지 않음.
	// history: createWebHashHistory(''),
	routes,
});

export default router;
