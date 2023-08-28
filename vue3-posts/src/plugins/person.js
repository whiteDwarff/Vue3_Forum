export default {
	install(app, options) {
		const person = {
			name: '강문호',
			say() {
				alert(this.name);
			},
			...options,
		};
		// global properties 등록 (어디서든 사용가능한 객체임)
		app.config.globalProperties.$person = person;
		// 객체를 주입, setup 내에서도 사용가능, key : person
		app.provide('person', person);
	},
};
