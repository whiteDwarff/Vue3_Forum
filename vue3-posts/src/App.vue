<script setup>
import TheHeader from '@/layout/TheHeader.vue';
import TheView from '@/layout/TheView.vue';
import useAlert from '@/composables/alert.js';

const { alerts } = useAlert();
</script>

<template>
	<TheHeader />
	<TheView />
	<AppAlert :items="alerts"></AppAlert>
</template>

<style scoped></style>
