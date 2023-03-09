<template>
  <div>这是孙组件--{{ grandsonData.msg1 + grandsonData.msg2 }}</div>
</template>

<script setup>
const grandsonData = reactive({
  msg1: inject('msg1')?.value,
  msg2: inject('msg2')?.value
})
console.log('-----孙------', grandsonData.msg1)
</script>
