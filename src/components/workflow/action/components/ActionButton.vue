<script setup lang="ts">
const props = defineProps({
  // 流程id
  tooltip: {
    type: String,
    default: '',
    required: true,
  },
  taskDefKey: {
    type: String,
    default: '',
    required: false,
  },
  actionName: {
    type: String,
    default: '',
    required: false,
  },
  text: {
    type: String,
    default: '按钮',
    required: true,
  },
  type:{
    type: String,
    default: 'primary',
    required: true,
  },

  style:{
    type: Object,
    default: () => ({}),
    required: false,
  },
  action: {
    required: false,
    type: Function,
  },
  actionBeforeCallBack: {
    required: false,
    type: Function,
  },
  needModal: {
    required: false,
    type: Boolean,
    default: false,
  },
})
const loading=ref<boolean>(false)
const modalVisible=ref<boolean>(false)
const btnClick =()=>{
        if(props.needModal){
            showModal()
        }else{
            handleAction()
        }
    }
function showModal(){
    setModalVisible(true)
}
async function handleAction(){
    setLoading(true)
    if(props?.actionBeforeCallBack){
        await props?.actionBeforeCallBack(props?.taskDefKey, props?.actionName).catch((err:any) => {
        console.log("err", err);
        setLoading(false);
        return Promise.reject();
      });
    }
    if (props?.action) {
      await props?.action().catch((e:any) => {
        setLoading(false);
      })
    }
    setLoading(false)
}
function setModalVisible(flag:boolean){
      modalVisible.value=flag
  };
function setLoading(flag:boolean){
    loading.value=flag
  };
</script>
<template>
     <a-tooltip placement="top" :title="props.tooltip">
      <a-button  :style='props.style'
            :disabled='loading'
            :type='props?.type'
            @click="btnClick"
            >
             <template  #icon>
                    <slot name="btnIcon"></slot>
            </template>
        {{props.text}}
     </a-button>
    </a-tooltip>
    <!-- 按钮触发的模态框 -->
    
</template>
<style lang="less" scoped>

</style>