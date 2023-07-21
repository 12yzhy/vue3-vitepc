<script setup lang="ts">
import ProcInsBpmn from './ProcInsBpmn.vue';
const props = defineProps({
  // 流程id
  processDefinitionId: {
    type: String,
    default: '',
    required: true,
  },
})
const visible=ref<boolean>(false)

function setModalVisible  (flag: boolean) {
      visible.value=flag
  };
  defineExpose({
    setModalVisible,
})

</script>
<template>
    <a-modal   :footer="null" width="80vw" bodyStyle="{top:100}"
        destroyOnClose v-model:visible="visible" title="流程图" @onCancel="()=>setModalVisible(false)">
        <div>
         <!-- 流程图  -->
          <ProcInsBpmn :processDefinitionId='props.processDefinitionId' />
          <ProcessHistory :processInstanceId='props.processDefinitionId' />
        </div>
    </a-modal>
</template>
<style lang="less" scoped>

</style>