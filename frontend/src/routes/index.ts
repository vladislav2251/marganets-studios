import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import siteConfig from '@/config/site';

import Home from '@/views/pages/home.vue';

const routes: RouteRecordRaw[] = [
        { path: '/', name: 'home', component: Home, meta: { title: `${siteConfig.name} | ${siteConfig.description}` } },
];

const router = createRouter({
        history: createWebHistory(),
        routes,
});

router.beforeEach((to, from, next) => {
        document.title = <string>to.meta.title;
        next();
});

export default router;