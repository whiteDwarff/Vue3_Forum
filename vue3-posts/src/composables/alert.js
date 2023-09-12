import { useAlertStore } from '@/store/alert';
import { storeToRefs } from 'pinia';

export default function useAlert() {
	const { alerts } = storeToRefs(useAlertStore());
	const { vAlert, vSuccess } = useAlertStore();
	// components에서 사용하기 위해 return 필요
	return {
		alerts,
		vAlert,
		vSuccess,
	};
}
// composables : 상태를 저장하여 모든 컴포넌트에서 로직을 재사용할 수 있음.
// 컴포넌트 내부에서 사용

// -----------------------------------------------

// plugins : vue 인스턴스의 공통 기능 확장
