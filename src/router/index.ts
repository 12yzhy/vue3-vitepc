
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: '/',
        meta: {
            title: 'layout',
        },
        component: () => import('@/layout/index.vue'),
    },
    // {
    //     path: '/login',
    //     name: 'login',
    //     meta: {
    //         title: 'login',
    //     },
    //     component: () => import('@/views/login/index.vue'),
    // },
    // 替代vue2中的'*'通配符路径
    // { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
    history: createWebHashHistory(), // history 模式则使用 createWebHistory()
    routes,
});
export default router;
