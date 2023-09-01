import AppAlert from '@/components/app/AppAlert.vue';
import AppCard from '@/components/app/AppCard.vue';
import AppGrid from '@/components/app/AppGrid.vue';
import AppAPagenation from '@/components/app/AppPagenation.vue';
import AppModal from '@/components/app/AppModal.vue';

export default {
	install(app) {
		app.component('AppAlert', AppAlert);
		app.component('AppCard', AppCard);
		app.component('AppGrid', AppGrid);
		app.component('AppPagenation', AppAPagenation);
		app.component('AppModal', AppModal);
	},
};
