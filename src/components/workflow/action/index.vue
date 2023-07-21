<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps({
  // 流程id
  processInstanceId: {
    type: String,
    default: '',
    required: true,
  },

})
const flowLoading=ref<boolean>(false)
// 流程详情配置项
const config =ref<any>({
        withdrawAble: false,
        transferAble: false,
        delegationAble: false,
        rejectedFromAble: false,
        completeAble: false,
        invalidAble: false,
        taskId: '',
        taskDefKey: ''})
// 获取表单填写内容
const  getTextAreaData = () => {
    // const { formRef } = this;
    // if (!formRef) {
    //   return {
    //     comment: ''
    //   };
    // }
    // return formRef.current.getFieldsValue();
  };
  const getWorkFlowInfoByProcessInstanceId = async (processInstanceId:string) => {
    if (!processInstanceId) {
      return;
    }
    flowLoading.value=true

    // const res = await getTaskNodeConfigByProcInstId(processInstanceId);
    // if (res.success) {
    //   this.setState({
    //     config: res.data
    //   },()=>{
    //     console.log('配置',this.state.config);
    //   });
    // }
    flowLoading.value=false

  };
  onMounted(()=>{
    //获取流程详情
    getWorkFlowInfoByProcessInstanceId(props.processInstanceId)
  })
</script>
<template>
   <a-skeleton active :loading="flowLoading">
    <div>
        <!--审批进度查询 -->
        <ShowProcessHistory
                :processInstanceId='props.processInstanceId'
                :extraData='{
                  ...config,
                  processInstanceId:props.processInstanceId
                }'
              />
    </div>
  </a-skeleton>

</template>
<style lang="less" scoped>

</style>