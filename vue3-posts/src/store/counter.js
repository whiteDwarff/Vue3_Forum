import { defineStore } from 'pinia';

// store는 use로 시작하는게 관례
// 'counter'는 store의 이름이다.
export const useCounterStore = defineStore('counter', {
	// 상태관리, 객체를 반환하는 함수
	state: () => ({
		counter: 1,
	}),
	// computed
	// this로 접근 불가
	getters: {
		doubleCount: state => state.counter * 2,
		dounleCountPlusOne() {
			return this.doubleCount + 1;
		},
	},
	// method
	// actions에선 화살표 함수를 사용허지 않는다. (this에 접근 x)
	actions: {
		increment() {
			this.counter++;
		},
	},
});
