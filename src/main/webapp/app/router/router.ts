import { EssentialsVue } from '@/common/primary/essentials';
import { HomepageVue } from '@/common/primary/homepage';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: { name: 'Homepage' },
  },
  {
    path: '/home',
    name: 'Homepage',
    component: HomepageVue,
  },
  {
    path: '/essentials',
    name: 'Essentials',
    component: EssentialsVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
