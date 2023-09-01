import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import globalComponents from '@/plugins/global_component.js';

const app = createApp(App);
// app.use(objPlugins, { name: '강문호' });
// app.use(funcPlugins);
// 모든 자식 컴포넌트에서 router와 route 객체를 사용할 수 있음.
app.use(globalComponents);
app.use(router);
app.mount('#app');

// console.log(import.meta.env.VITE_APP_API_URL);
