<template>
  <div>
    <button @click="getParentFun">调用父组件方法</button>
    <GrandSon></GrandSon>
  </div>
</template>

<script setup>
import GrandSon from './grandSon.vue'
const attrs = useAttrs()
//获取父组件方法和事件
const getParentFun = () => {
  console.log(attrs) //Proxy {"msg1": "子组件msg1","msg2": "子组件msg2"}
  //调用父组件方法
  attrs.onParentFun('我是子组件数据')
}
</script>
