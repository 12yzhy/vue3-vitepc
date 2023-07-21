<script setup lang="ts">
import ActionButton from './ActionButton.vue';
import ProcInstBpmnModal from '../../BpmnViewer/ProcInstBpmnModal.vue'
import { ContainerOutlined } from '@ant-design/icons-vue';

const props = defineProps({
  // 流程id
  processInstanceId: {
    type: String,
    default: '',
    required: true,
  },
  type: {
    type: String,
    default: '',
    required: true,
  },
})
const btnConfig={
    text:'审批进度查询',
    style:{marginLeft: 'auto', margin: 'unset'},
 
}
const ProcInstBpmnModalref =ref()
const actionfn =()=>{
    return new Promise((res, rej) => {
      if (ProcInstBpmnModalref) {
        ProcInstBpmnModalref.value.setModalVisible(true);
      }
      res(1);
    });
}
</script>
<template>
    <ActionButton  :text='btnConfig.text'
          tooltip='查看流程和审批历史'
          :style="btnConfig.style"
          :action='actionfn'>
          <!-- icon 插槽 -->
          <template v-slot:btnIcon>
              <ContainerOutlined />
          </template>
          </ActionButton>
          <ProcInstBpmnModal :processDefinitionId='props.processInstanceId' ref="ProcInstBpmnModalref" />   
</template>



<style lang="less" scoped>

</style>