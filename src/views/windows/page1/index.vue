<template>
  <div>
    <a-select style="width: 80px" :options="optionsArr" />
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'

//   模拟调用接口
function getRemoteData() {
  return new Promise<any[]>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          key: 1,
          label: '苹果',
          value: 1
        },
        {
          key: 2,
          label: '香蕉',
          value: 2
        },
        {
          key: 3,
          label: '橘子',
          value: 3
        }
      ])
    }, 3000)
  })
}
const some = ref('null')
if ((some.value ?? '') == '') {
}
const optionsArr = ref<any[]>([])
onMounted(() => {
  getRemoteData().then((data) => {
    optionsArr.value = data
  })
})
</script>
<style lang="less" scoped></style>
