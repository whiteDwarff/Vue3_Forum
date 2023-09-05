import axios from 'axios';
import { isRef, ref, unref, watchEffect } from 'vue';

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

// ------------------------------------------------
// 인자가 없을 경우 기본 method는 get, API 요청의 기본 URL
const defaultConfig = {
	method: 'get',
};
// ------------------------------------------------
// immediate : 함수가 실행되는 즉시 API 요청을 실행할 것인가?
// method가 get인 경우 : true, post, delete.. 이라면  false
const defaultOptions = {
	immediate: true,
};
// ------------------------------------------------
// url : endPoint, congif : Axios 요청 설정
// options : API요청의 성공, 실패여부 및 사용자의 기타 설정을 실행가능
export const useAxios = (url, config = {}, options = {}) => {
	// ------------------------------------------------
	// composable 사용 시 데이터는 ref()로 선언해야 함
	// reactive()로 선언 시 구조분해할당을 하면 반응성을 잃는다.
	const data = ref(null);
	const error = ref(null);
	const loading = ref(false);
	// 전체 API의 응답을 저장
	const response = ref(null);
	// ------------------------------------------------
	// immediate에는 options의 immediate 값이 할당,
	// onSuccess, onError가 있다면 사용 없다면 null
	const { onSuccess, onError, immediate } = {
		...defaultOptions,
		...options,
	};
	// ------------------------------------------------
	// PostListView의 Filter에서 사용되는 옵션값
	const { params } = config;
	// ------------------------------------------------
	const excute = body => {
		data.value = null;
		error.value = null;
		loading.value = true;

		axios(unref(url), {
			// 기본 설정
			...defaultConfig,
			// 사용자 설정, config의 값이 있다면 defaultConfig의 값은 무시
			...config,
			params: unref(params),
			data: typeof body === 'object' ? body : {},
		})
			.then(res => {
				response.value = res;
				data.value = res.data;
				// 성공 시 실행될 로직
				if (onSuccess) onSuccess(res);
			})
			.catch(err => {
				error.value = err;
				// 실패 시 실행될 로직
				if (onError) onError(err);
			})
			.finally(() => {
				loading.value = false;
			});
	};
	if (isRef(params) || isRef(url)) {
		watchEffect(excute);
	} else {
		if (immediate) excute();
	}
	return {
		response,
		data,
		error,
		loading,
		excute,
	};
};
