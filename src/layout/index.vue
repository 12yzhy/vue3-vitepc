<template>
  <a-layout>
    <a-layout-sider width="200" style="background: #fff">
      <a-menu
        v-model:selectedKeys="selectedKeys2"
        v-model:openKeys="openKeys"
        mode="inline"
        :style="{ height: '100%', borderRight: 0, overflow:'hidden',overflowY: 'auto',}"
      >
        <template v-for="(el, idx) in asyncRouter" :key="el.path">
          <template v-if="!el.children">
            <a-menu-item :key="idx" @click.stop="goPage(el.path)">
              <!-- <template #icon>
                <PieChartOutlined />
              </template> -->
              {{ el?.meta?.title }}
            </a-menu-item>
          </template>
          <template v-else>
            <a-sub-menu :key="el.path">
              <template #title>
                <span>
                  <laptop-outlined />
                  {{ el?.meta?.title }}
                </span>
              </template>
              <a-menu-item
                v-for="e in el.children"
                :key="e.path"
                @click.stop="goPage(e.path)"
              >
                {{ e?.meta?.title }}
              </a-menu-item>
            </a-sub-menu>
          </template>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout style="padding: 0 24px 24px">
      <a-breadcrumb  v-if="bumbPath" style="margin: 16px 0">
        <a-breadcrumb-item v-for="i,index in bumbPath" :key="index">{{ i }}</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content
        :style="{
          background: '#fff',
          padding: '24px',
          margin: 0,
          minHeight: '280px'
        }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from '@ant-design/icons-vue'
import { routes as asyncRouter } from '@/router'
import { useRouter, useRoute } from 'vue-router'
const $router = useRouter()
const $route = useRoute()
const selectedKeys1 = ref<string[]>(['2'])
const selectedKeys2 = ref<string[]>(['1'])
const collapsed = ref<boolean>(false)
const openKeys = ref<string[]>()
const bumbPath=ref<any>([])
console.log('要渲染的', asyncRouter)
function goPage(path: string) {
  getbumbPath(path)
  console.log('要跳转的路由',path);
  $router.push({ path })
}
function getbumbPath(v:string){
  bumbPath.value=v.slice(1).split('/')
  // console.log(bumbPath.value);
}
</script>
<style>
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
.ant-layout {
  height: 100vh;
}
</style>
