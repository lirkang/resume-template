import '@/themes/style.css';
import { vLoading } from 'element-plus';
import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';
import 'reset.css';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();

pinia.use(createPersistedState({}));

app.directive('loading', vLoading);
app.use(pinia);
app.mount('#app');
