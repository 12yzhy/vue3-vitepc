<template>
  <div>
    attr和listeners,provide/inject（父组件）
    <hr />
    <Child @parentFun="parentFun" :msg1="msg1" :msg2="msg2" />
  </div>
</template>
<script lang="ts" setup>
import Child from './child.vue'
const msg1 = ref('子组件msg1')
const msg2 = ref('子组件msg2')
const parentFun = (val: string) => {
  console.log(`父组件方法被调用,获得子组件传值：${val}`)
}
provide('msg1', msg1)
provide('msg2', msg2)

//
</script>
<style lang="less" scoped></style>
