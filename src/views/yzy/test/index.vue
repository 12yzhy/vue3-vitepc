<template>
  <div>
    <a-form :model="queryForm">
      <a-row :gutter="24" class="search-condition">
        <a-col :xxl="4" :xl="6" :xs="8">
          <a-form-item label="购方名称">
            <a-input
              v-model:value="queryForm.buyerName"
              placeholder="请输入购方名称"
            />
          </a-form-item>
        </a-col>
        <a-col :xxl="4" :xl="6" :xs="8">
          <a-form-item label="销方名称">
            <a-select
              v-model:value="queryForm.boterId"
              placeholder="请选择销方名称"
              mode="combobox"
              show-search
            >
              <a-select-option
                :value="item.id"
                :key="item.id"
                :name="item.name"
                v-for="item in operatorList"
                >{{ item.name }}</a-select-option
              >
            </a-select>
          </a-form-item>
        </a-col>
        <!-- <a-select
          v-model="queryForm.boterId"
          :options="operatorList"
          mode="combobox"
          placeholder="请选择收件人"
        >
        </a-select> -->

        <a-col :xxl="4" :xl="6">
          <a-form-item>
            <a-space>
              <a-button type="primary" @click="toOutSearch"> 查询 </a-button>
              <a-button @click="reset"> 重置 </a-button>
            </a-space>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import type { SelectProps } from 'ant-design-vue'
import { Form, message, Modal } from 'ant-design-vue'
import { Divider } from 'ant-design-vue'
const selectOpen = ref(false)
const queryForm = reactive({
  buyerName: '',
  boterId: null,
  storeId: []
})
const fetching = ref(false)
const operatorList = ref<{ id: number; name: string }[]>([
  {
    id: 0,
    name: '今天'
  },
  {
    id: 1,
    name: '本周'
  },
  {
    id: 2,
    name: '本月'
  },
  {
    id: 3,
    name: '本年'
  },
  {
    id: 4,
    name: '自定义'
  }
])

const useForm = Form.useForm
const { resetFields } = useForm(queryForm)
function reset() {
  resetFields()
}

let lastFetchId = 0
const getOperatorList = () => {}
const searchItem = () => {
  console.log('去搜索')
}
const addItem = () => {
  selectOpen.value = false
}
const cancel = () => {
  selectOpen.value = false
}
// const getOperatorList = (value) => {
//   lastFetchId += 1
//   const fetchId = lastFetchId
//   console.log('object', value)
//   if (!value) return
//   operatorList.value = []
//   fetching.value = true

//   //   // TODO  根据 str匹配不同的接口调用
//   //   anyInvoiceApi[str](params).then(
//   //     (res: any) => {
//   //       if (fetchId !== lastFetchId) {
//   //         // for fetch callback order
//   //         return
//   //       }
//   //       operatorList.value = res
//   //       fetching.value = false
//   //     },
//   //     () => {
//   //       //
//   //     }
//   //   )
// }

const toOutSearch = () => {}
</script>
