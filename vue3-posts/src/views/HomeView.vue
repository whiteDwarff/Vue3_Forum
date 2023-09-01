<script setup>
import { useRouter } from 'vue-router';
// import AppGrid from '@/components/AppGrid.vue';
// import AppCard from '@/components/AppCard.vue';
import { ref } from 'vue';
// ------------------------------------------
// setup() 내에서 router를 이동하는 method 선언
const router = useRouter();
const goAboutPage = () => router.push('/about');

const items = ref(['사과', '바나나', '딸기', '키위']);
</script>
<template>
	<div>
		<h2>about view</h2>
		<button class="btn btn-primary" @click="goAboutPage">GO ABOUT</button>
		<!-- AppGird의 slot에 정의된 데이터를 부모 컴포넌트에서 사용 -->
		<AppGrid :items="items" v-slot="{ item }" col-class="col-6">
			<AppCard>{{ item }}</AppCard>
		</AppGrid>

		<hr class="my-4" />
	</div>
</template>

<!-- plugin은 Options API에서 작동됨 (created 이후 )-->
<script>
// export default {
// 	created() {
// 		console.log(this.$person.name);
// 	},
// };
</script>

<style lang="scss" scoped></style>
