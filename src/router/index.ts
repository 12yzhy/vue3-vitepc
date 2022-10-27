
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
export const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        meta: {
            title: 'login',
        },
        component: () => import('@/views/login/index.vue'),
    },
    {
        path: '/',
        name: '/',
        meta: {
            title: '一级路由1',
        },
        component: () => import('@/layout/index.vue'),
        redirect: '/others',
        children: [
            {
                path: '/others',
                name: 'others',
                meta: {
                    keepAlive: false, // 不需要缓存标示
                    title: '其他菜单'
                },
                component: () => import('@/views/others/index.vue')
            },
            {
                path: '/bigMp4',
                name: 'bigMp4',
                meta: {
                    keepAlive: false, // 不需要缓存标示
                    title: '大文件上传'
                },
                component: () => import('@/views/bigMp4/index.vue')
            },
            {
                path: '/anothers',
                name: 'anothers',
                meta: {
                    keepAlive: false, // 不需要缓存标示
                    title: '还没想好'
                },
                component: () => import('@/views/anothers/index.vue')
            },
        ]
    },
    {
        path: '/yzy',
        name: 'yzy',
        meta: {
            title: '一级路由2',
        },
        component: () => import('@/layout/index.vue'),
        redirect: '/yzy/test',
        children: [
            {
                path: '/yzy/test',
                name: '',
                meta: {
                    keepAlive: false, // 不需要缓存标示
                    title: '测试'
                },
                component: () => import('@/views/yzy/test/index.vue')
            },
            {
                path: '/yzy/interview',
                name: 'interview',
                meta: {
                    keepAlive: false, // 不需要缓存标示
                    title: '面试'
                },
                component: () => import('@/views/yzy/interview/index.vue')
            },
        ]
    },

    // 替代vue2中的'*'通配符路径
    // { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
    history: createWebHashHistory(), // history 模式则使用 createWebHistory()
    routes,
});
export default router;
