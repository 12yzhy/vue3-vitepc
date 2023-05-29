

<template>
  <div class="vision-list" ref="listRef" @scroll="handleScroll">
    <div
      class="item"
      v-for="(item, idx) in renderList"
      :key="idx"
      :style="`box-sizing: border-box;
        border: 1px solid #000;height:${init.itemHeight}px;line-height:${init.itemHeight}px;transform:translateY(${init.top}px)`"
    >
      {{ item.str }}
    </div>
  </div>
</template>
<script lang="ts" setup>
const listRef = ref()
const mockList = ref<any>([]) //总数据列表
const renderList = ref([]) //要渲染的列表(动态变化)
const init = reactive({
  itemHeight: 60, //单元素高度
  start: 0, //开始渲染位置
  volumn: 0, //总容量
  top: 0
})
onMounted(() => {
  getMockList()
  const cHeight = 600 //计算元素高度
  //计算元素中能容纳下几个节点并且设置四个节点作为冗余 缓冲
  init.volumn = Math.ceil(cHeight / init.itemHeight) + 4
  //设置要渲染的列表 设置成能够容纳下的最大元素个数
  renderList.value = mockList.value.slice(0, init.volumn)
})
function getMockList() {
  for (let i = 0; i < 100; i++) {
    mockList.value.push({ str: `第${i + 1}个列表` })
  }
}
function handleScroll() {
  const scrollTopHeight = listRef.value.scrollTop
  // 计算卷进去多少个子元素
  const start = getCurStart(scrollTopHeight)
  if (start !== init.start) {
    // 在这需要获得一个可以被itemHeight整除的数来作为item的偏移量
    const offsetY = scrollTopHeight - (scrollTopHeight % init.itemHeight)
    // 使用slice拿到需要渲染的那一部分
    renderList.value = mockList.value.slice(start, init.start + init.volumn)
    //这里的top用于设置translateY  transform:translateY(${top}px)
    init.top = offsetY
  }
  init.start = start
}
function getCurStart(v: number) {
  return ~~(v / init.itemHeight) //~~等于math.floor()
}
</script>
<style lang="less" scoped>
.vision-list {
  width: 60%;
  height: 50%;
  border: 1px solid rebeccapurple;
  overflow-y: auto;
}
</style>
