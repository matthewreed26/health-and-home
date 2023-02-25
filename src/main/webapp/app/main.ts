import { createApp } from 'vue';
import { AppVue } from './common/primary/app';
import router from './router/router';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist';
import { appProvide } from './appProvide';
import './tailwind/index.css';

// jhipster-needle-main-ts-import

const app = createApp(AppVue);
app.use(router);
const pinia = createPinia();
pinia.use(piniaPersist);
app.use(pinia);
app.provide('appProvide', appProvide());
// jhipster-needle-main-ts-provider
app.mount('#app');
