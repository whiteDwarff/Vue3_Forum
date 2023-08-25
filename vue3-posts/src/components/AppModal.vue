<template>
	<div v-if="modalValue">
		<div class="modal-backdrop fade show"></div>
		<!-- Modal -->
		<div
			class="modal fade show d-block"
			tabindex="-1"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<slot name="header">
							<h1 class="modal-title fs-5" id="exampleModalLabel">
								{{ title }}
							</h1>
							<button
								@click="$emit('update:modalValue', false)"
								type="button"
								class="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</slot>
					</div>
					<div class="modal-body">
						<slot></slot>
					</div>
					<div class="modal-footer">
						<slot name="actions"></slot>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
defineProps({
	modalValue: Boolean,
	title: String,
});
defineEmits(['close', 'update:modalValue']);
</script>

<style lang="scss" scoped></style>
