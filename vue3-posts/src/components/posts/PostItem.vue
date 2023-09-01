<template>
	<AppCard>
		<h5 class="card-title">{{ title }}</h5>
		<p class="card-text">{{ contents }}</p>
		<p class="text-muted">{{ createdAt }}</p>
		<template #footer>
			<div class="d-flex flex-row-reverse">
				<button @click.stop="$emit('modal')" class="btn p-0">
					<i class="fa-solid fa-star"></i>
				</button>
			</div>
		</template>
	</AppCard>
</template>

<script setup>
// import AppCard from '@/components/AppCard.vue';
defineProps({
	title: {
		type: String,
		required: true,
	},
	contents: {
		type: String,
		required: true,
	},
	createdAt: {
		type: [Date, String, Number],
		required: true,
	},
});
</script>

<style lang="scss" scoped></style>
