<template>
  <div>其他</div>
</template>
<script lang="ts" setup>
import { ComponentInternalInstance } from 'vue'

const obj = reactive({
  name: '张三',
  age: '12'
})
const num = ref([1, 2, 3])
const obj1: ComponentInternalInstance | null = getCurrentInstance()
// Vue3 中提供了一个 getCurrentInstance 方法来获取当前 Vue 实例
console.log('当前 Vue 实例', obj1)
onBeforeRouteLeave((to, from) => {
  const answer = window.confirm(
    'Do you really want to leave? you have unsaved changes!'
  )
  // 取消导航并停留在同一页面上
  if (!answer) return false
})
</script>
<style lang="less" scoped></style>
