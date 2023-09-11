<template>
	<div>
		<h2>home view</h2>
		<button class="btn btn-primary" @click="$router.push('/')">GO HOME</button>
	</div>
	<hr />
	<h2>STORE</h2>
	{{ counter }}
	<!-- <p>counter : {{ store.counter }}</p>
	<p>doubleCount : {{ store.doubleCount }}</p>
	<p>doubleCount : {{ store.dounleCountPlusOne }}</p>
	<button @click="store.increment">click!!</button> -->
	<p>counter : {{ counter }}</p>
	<p>doubleCount : {{ doubleCount }}</p>
	<p>doubleCount : {{ dounleCountPlusOne }}</p>
	<button @click="increment">click!!</button>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useCounterStore } from '@/store/counter.js';
import { storeToRefs } from 'pinia';

const store = useCounterStore();
console.log(store);
// -----------------------------------------
// ** store는 reactive 객체임
// 구조분해할당 시 반응성을 잃는다.
// storeToRefs를 통해 반응성 주입 가능
// state, getters는 storeToRefs() 사용
const { counter, doubleCount, dounleCountPlusOne } = storeToRefs(store);
// actions는 구조분해할당을 바로 할 수 있다.
const { increment } = store;

console.log(counter);
// -----------------------------------------
// ------------------------------------------
// setup() 내에서 route 정보를 사용
const route = useRoute();
console.log(route.path);
counter.value = 100;
// ------------------------------------------
</script>

<style lang="scss" scoped></style>
