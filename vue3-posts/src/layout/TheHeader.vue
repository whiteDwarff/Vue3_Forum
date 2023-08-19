<template>
	<header>
		<nav class="navbar navbar-dark navbar-expand-sm bg-primary">
			<div class="container-fluid">
				<router-link to="/" class="navbar-brand">GYM COADING</router-link>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto">
						<li class="nav-item">
							<!-- active-calss="" router가 활성화 되었을 경우 사용될 class를 정의 -->
							<router-link
								class="nav-link"
								active-class="active"
								aria-current="page"
								to="/"
								>Home</router-link
							>
						</li>
						<li class="nav-item">
							<router-link to="/about" class="nav-link" active-class="active"
								>About</router-link
							>
						</li>
						<li class="nav-item">
							<router-link to="/posts" class="nav-link" active-class="active"
								>Posts</router-link
							>
						</li>
						<li class="nav-item">
							<router-link to="/nested" class="nav-link" active-class="active"
								>Nested</router-link
							>
						</li>
					</ul>
					<div class="d-flex" role="search">
						<button @click="goPage" class="btn btn-outline-light" type="button">
							Add Post
						</button>
					</div>
				</div>
			</div>
		</nav>
	</header>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goPage = () => {
	router.push({
		name: 'PostCreate',
	});
};
</script>

<style lang="scss" scoped></style>
