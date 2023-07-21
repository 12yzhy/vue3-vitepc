<script setup lang="ts">
import BpmnViewer from './BpmnViewer.vue';

const props = defineProps({
  // 流程id
  processDefinitionId: {
    type: String,
    default: '',
    required: true,
  },
})

</script>
<template>
    <div style="display: 'flex'">
        <a-space>
          <span>颜色:</span>
          <a-tag color='#017501'>审批通过</a-tag>
          <a-tag color='#e90606'>正在审批</a-tag>
        </a-space>
        <span style="flex: 1" >
        </span>
        <span>
          流程实例ID: <strong>{{props.processDefinitionId}}</strong>
        </span>
    </div>
    <BpmnViewer
        :processDefinitionId="props.processDefinitionId"
        />
        <!-- request={getProcessXmlByInsId} -->
      <!--request 接口  -->
</template>
<style lang="less" scoped>

</style>