<template>
	<AppModal v-model:modalValue="show" title="게시글">
		<template #default>
			<div class="row g-3">
				<div class="col-3 text-muded">제목</div>
				<div class="col-9">{{ title }}</div>
				<div class="col-3 text-muded">내용</div>
				<div class="col-9">{{ contents }}</div>
				<div class="col-3 text-muded">등록일</div>
				<div class="col-9">{{ createdAt }}</div>
			</div>
		</template>
		<template #actions>
			<button
				@click="closeModal"
				type="button"
				class="btn btn-secondary"
				data-bs-dismiss="modal"
			>
				Close
			</button>
		</template>
	</AppModal>
</template>

<script setup>
import AppModal from '@/components/AppModal.vue';
import { computed } from 'vue';
const props = defineProps({
	modelValue: Boolean,
	title: String,
	contents: String,
	createdAt: [String, Number],
});
const emit = defineEmits(['update:modelValue']);
const show = computed({
	get() {
		return props.modelValue;
	},
	set(value) {
		emit('update:modelValue', value);
	},
});
const closeModal = () => (show.value = false);
</script>

<style lang="scss" scoped></style>
