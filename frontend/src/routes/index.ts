import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import siteConfig from '@/config/site';

import Index from '@/views/pages/index.vue';
import Imprint from '@/views/pages/imprint.vue';
import NotFound from '@/views/pages/404.vue';

const routes: RouteRecordRaw[] = [
        { path: '/', name: 'index', component: Index, meta: { title: `${siteConfig.name} | ${siteConfig.description}` } },
        { path: '/imprint', name: 'imprint', component: Imprint, meta: { title: `Imprint | ${siteConfig.name}` } },
        { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound, meta: { title: `Page not found | ${siteConfig.name}` } },
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