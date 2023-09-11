import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from '@/router';
import globalComponents from '@/plugins/global_component.js';
import globalDirective from '@/plugins/global_directive.js';
import dayjs from '@/plugins/day.js';

const app = createApp(App);

app.use(globalComponents);
app.use(globalDirective);
app.use(router);
app.use(dayjs);
app.use(createPinia());
// directive 등록, key : value
// app.directive('focus', focus);
app.mount('#app');
