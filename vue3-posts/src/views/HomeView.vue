<script setup>
import { useRouter } from 'vue-router';
// import AppGrid from '@/components/AppGrid.vue';
// import AppCard from '@/components/AppCard.vue';
import { ref, reactive } from 'vue';
import { toRef } from 'vue';
import { toRefs } from 'vue';
// ------------------------------------------
// setup() 내에서 router를 이동하는 method 선언
const router = useRouter();
const goAboutPage = () => router.push('/about');
// ------------------------------------------

// position은 반응형 상태이지만 속성인 x,y는 반응형이 아니다
const position = reactive({
	x: 100,
	y: 1000,
});
// const { x, y } = position; 	->	  반응형 데이터가 아님
//const x = ref(position.x); // position.x의 값을 재할당받은 새로운 변수, 값을 공유하지 않음
//const y = ref(position.y);

// -----------------------------------------
// 하나의 변수에 하나의 값을 할당
// const x = toRef(position, 'x');
// const y = toRef(position, 'y');
// -----------------------------------------
// 여러개의 변수에 구조분해 할당 가능
const { x, y } = toRefs(position);
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

		<h2>{{ position }}</h2>
		<h2>{{ x }}</h2>
		<h2>{{ y }}</h2>
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
