<script setup lang="ts">
  import Modeler from 'bpmn-js/lib/Modeler.js' // 引入 bpmn-js
// import Modeler from 'bpmn-js/dist/bpmn-navigated-viewer.production.min.js';

import {res} from './mock'
const props = defineProps({
  // 流程id
  processDefinitionId: {
    type: String,
    default: '',
    required: true,
  },
  request:{
    required: false,
    type: Function,
  }
})
const canvasRef=ref()
const initModeler=async()=>{

    // const res = await request(props.processDefinitionId);
    // if (res.success) 
      const modeler = new Modeler({
        container: canvasRef.value
      });
      modeler.importXML(res.data.xml, (err) => {
        if (err) {
        //   Modal.error({
        //     title: '加载xml错误',
        //     content: err
        //   });
        console.log('加载xml错误');
        } else {
          const canvas: any = modeler.get('canvas');
          canvas.zoom('fit-viewport');
          // 划线
          res.data.actInsts?.forEach((actInst) => {
            canvas.addMarker(actInst.actDefKey, actInst.className);
          });
        }
      });
}
onMounted(()=>{
    initModeler() 
   
})

</script>
<template>
        <div
        ref="canvasRef"
          id='bpmnViewerContainer'
          style=" width: 100%;height: 60vh"
        ></div>
        <!--  绿色箭头-->
        <svg width='0' height='0'>
          <marker
            id='green-arrow'
            viewBox='0 0 20 20'
            refX='11'
            refY='10'
            markerWidth='10'
            markerHeight='10'
            orient='auto'
          >
            <path
              d='M 1 5 L 11 10 L 1 15 Z'
              style="fill: green;
                stroke-width: 1px;
                stroke-linecap: round;
                stroke-dasharray: 10000px, 1px;
                stroke: green
                "
            />
          </marker>
        </svg>
</template>
<style lang="less" scoped>
//隐藏logo
:deep(.bjs-powered-by){
display: none;
}

:deep(.green .djs-visual) {
  > path:nth-child(1) {
    marker-end: url('#green-arrow') !important;
  }
  > :nth-child(1) {
    stroke: #017501 !important;
  }
}
:deep(.djs-bendpoints){
    display: none;
}

:deep(.red .djs-visual ){
  rect {
    stroke-width: 3px !important;
  }

  > :nth-child(1) {
    stroke: #e90606 !important;
  }
}
</style>