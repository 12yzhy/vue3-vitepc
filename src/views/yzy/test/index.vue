<template>
  主题配置
  <ul class="item-c">
    <li
      v-for="color in APP_PRESET_COLOR_LIST"
      :key="color"
      :style="{
        height: '22px',
        width: '22px',
        background: color,
        borderRadius: '3px'
      }"
      @click="changeTheme(color)"
    >
      <check-outlined
        v-if="selectPrimaryColor === color"
        :style="{ color: '#ffffff' }"
      />
    </li>
  </ul>
  <a-button type="primary" style="margin-left: 10px">选取已有客户开票</a-button>
</template>

<script setup lang="ts">
import { APP_PRESET_COLOR_LIST } from '@/config/theme'
import { setTheme, PRIMARY_COLOR } from '@/hooks/useTheme'
import { CheckOutlined } from '@ant-design/icons-vue'

const selectPrimaryColor = ref('#1a91ff')
const changeTheme = (val: string) => {
  setTheme(val).then(() => {
    // selectPrimaryColor.value = local[PRIMARY_COLOR]
    selectPrimaryColor.value = val
  })
}
</script>

<style scoped lang="less">
.item-c {
  // .flex-box(@jc:flex-start,@fw:wrap);
  display: flex;

  li {
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    .flex-box();
  }
}
</style>
