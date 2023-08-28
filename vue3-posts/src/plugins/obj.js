const objPlugins = {
	install(app, options) {
		console.log('object plugins..', app);
		console.log('object plugins..', options);
		// -------------------------------------------
	},
};
export default objPlugins;

/*
app : application instance
options: 

// app.component() : 전역 컴포넌트
// app.config.globalProperties : 전역 애플리케이션 인스턴스에 속성 추가
// app.directive : 커스텀 디렉티브
// app.provide : 리소스
*/