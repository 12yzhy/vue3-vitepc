import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'login'
    },
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    name: '/',
    meta: {
      title: '一级路由1'
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
          title: '文件夹上传'
        },
        component: () => import('@/views/anothers/index.vue')
      }
    ]
  },
  {
    path: '/yzy',
    name: 'yzy',
    meta: {
      title: '相关插件集成测试'
    },
    redirect: '/yzy/test',
    component: () => import('@/layout/index.vue'),
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
        name: '',
        meta: {
          keepAlive: false, // 不需要缓存标示
          title: '调试'
        },
        component: () => import('@/views/yzy/interview/index.vue')
      },
      {
        path: '/yzy/bpmn',
        name: '',
        meta: {
          keepAlive: false, // 不需要缓存标示
          title: '流程设计'
        },
        component: () => import('@/views/yzy/bpmn/index.vue')
      }
    ]
  },

  {
    path: '/windows',
    name: 'windows',
    meta: {
      title: '自己测试'
    },
    component: () => import('@/layout/index.vue'),
    redirect: '/windows/page1',
    children: [
      {
        path: '/windows/page1',
        name: 'page1',
        meta: {
          keepAlive: false, // 不需要缓存标示
          title: '虚拟列表'
        },
        component: () => import('@/views/windows/page1/index.vue')
      },
      {
        path: '/windows/page2',
        name: 'page2',
        meta: {
          keepAlive: false, // 不需要缓存标示
          title: '窗口2'
        },
        component: () => import('@/views/windows/page2/index.vue')
      },
      {
        path: '/windows/gantt',
        name: 'gantt',
        meta: {
          keepAlive: false, // 不需要缓存标示
          title: '甘特图'
        },
        component: () => import('@/views/windows/gantt/index.vue')
      }
    ]
  },
  {
    path: '/yeedoctest',
    name: 'yeedoctest',
    meta: {
      title: '易稻壳项目测试'
    },
    redirect: '/yeedoctest/pagetst',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/yeedoctest/pagetst',
        name: 'page1',
        meta: {
          keepAlive: false, // 不需要缓存标示
          title: '流程推进组件action'
        },
        component: () => import('@/views/yeedoctest/pagetst/index.vue')
      }, 
      {
        path: '/yeedoctest/richword',
        name: 'page2',
        meta: {
          keepAlive: false, // 不需要缓存标示
          title: '富文本集成'
        },
        component: () => import('@/views/yeedoctest/richword/index.vue')
      },
      // {
      //   path: '/windows/gantt',
      //   name: 'gantt',
      //   meta: {
      //     keepAlive: false, // 不需要缓存标示
      //     title: '甘特图'
      //   },
      //   component: () => import('@/views/windows/gantt/index.vue')
      // }
    ]
  },

  // 替代vue2中的'*'通配符路径
  { path: '/:pathMatch(.*)*', redirect: '/' } //所有不存在的path,皆会跳转到'/'
]

const router = createRouter({
  history: createWebHashHistory(), // history 模式则使用 createWebHistory()
  routes
})
export default router
