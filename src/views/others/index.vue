<template>
  <div>水印</div>
  <a-popover v-model:visible="visible" title="Title" trigger="click">
    <template #content>
      <a @click="hide">Close</a>
    </template>
    <a-button type="primary">Click me</a-button>
  </a-popover>
</template>
<script lang="ts" setup>
const    visible =ref<boolean>(false)
function hide (){
  visible.value = false;
}
</script>
<style lang="less" scoped></style>
