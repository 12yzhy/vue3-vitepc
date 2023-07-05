


  <script lang="ts" setup>
import { message } from 'ant-design-vue'

  import BpmnModeler from 'bpmn-js/lib/Modeler.js' // 引入 bpmn-js
// 导入一下有关于bpmn-js的字体库以及样式文件
import 'bpmn-js/dist/assets/diagram-js.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'
// 右侧属性面包样式
// 汉化包 (这里注意你们项目的路径！！！！！！！)
// import customTranslate from "/@/views/workOrder/workOrderProcess/utils/customTranslate"; 
// 注意这个xml文件
import  xmlStr1 from './xml' 
import { onMounted, reactive, ref } from 'vue'
// 左侧属性面板模块待自定义
const canvasRef=ref()
  const bpmnState = reactive<any>({
     bpmnModeler: null,
     bpmnXmlStr: xmlStr1, // xml数据
  })
  const createNewDiagram = async (bpmn: any) => {
  // 将字符串转换成图显示出来
  try {
    const result = await bpmnState.bpmnModeler.importXML(bpmn);
    // bpmnState.bpmnModeler.get('canvas').zoom('fit-viewport');
    const {warnings} = result;
    console.log(warnings);
  } catch (e) {
    message.error('打开模型出错，数据格式有误！')
    console.log('error--->', e)
  }
};
const init = () => {

  // 生成实例
  bpmnState.bpmnModeler = new BpmnModeler({
    container: canvasRef.value, // 获取到属性ref为“canvasRef”的dom节点
    // propertiesPanel: {
    //   parent: '#js-properties-panel'
    // },
    // additionalModules: [
    //   BpmnPropertiesPanelModule,
    //   BpmnPropertiesProviderModule,
    //   //  汉化模块
    //   customTranslateModule
    //  ],
    // moddleExtensions: {
    //   camunda: CamundaBpmnModdle
    // }
  })
  createNewDiagram(bpmnState.bpmnXmlStr) // 新增流程定义
};
onMounted(() => {
  init()
  const bjsIoLogo = document.querySelector('.bjs-powered-by')
    while (bjsIoLogo.firstChild) {
      bjsIoLogo.removeChild(bjsIoLogo.firstChild)
    }

})


  </script>
  <template>
     <!--创建容器-->
  <div class="containers">
    <div class="canvas" ref="canvasRef"></div>
     <!-- 左侧属性面板模块 -->
        <div class="PropertiesPanel">左侧属性面板模块</div>
  </div>
</template>
  <style lang="less" scoped>
    .containers{
        width: 100%;
        height: 100%;
        display: flex;
        .canvas{
            height: 100%;
            flex: 1;
        }
        .PropertiesPanel{
            width: 420px;
            height:90%;
            border: 1px solid #000000;
        }   
//         .bjs-powered-by {
//   display:none !important;
// }
        
    }
</style>