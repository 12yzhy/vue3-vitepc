 /*  const xmlStr1 =`<?xml version="1.0" encoding="UTF-8"?>
   <definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" 
        xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" 
        xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" 
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
        id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" 
        targetNamespace="http://bpmn.io/bpmn" 
        exporter="bpmn-js (https://demo.bpmn.io)" 
        exporterVersion="5.1.2">
    <process id="Process_1" name="" isExecutable="false" camunda:versionTag="">
      <startEvent id="StartEvent_1y45yut" name="开始" />
    </process>
    <bpmndi:BPMNDiagram id="BpmnDiagram_1">
      <bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="Process_1">
        <bpmndi:BPMNShape id="StartEvent_1y45yut_di" bpmnElement="StartEvent_1y45yut">
          <omgdc:Bounds x="152" y="102" width="36" height="36" />
          <bpmndi:BPMNLabel>
            <omgdc:Bounds x="160" y="145" width="22" height="14" />
          </bpmndi:BPMNLabel>
        </bpmndi:BPMNShape>
      </bpmndi:BPMNPlane>
    </bpmndi:BPMNDiagram>
   </definitions>` */
   const xmlStr1 ="<?xml version='1.0' encoding='UTF-8'?>\n" +
   '<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://flowable.org/test">\n' +
   '  <process id="PROCESS_ID" name="PROCESS_NAME" isExecutable="true">\n' +
   '    <startEvent id="startEvent1" flowable:initiator="initiator"/>\n' +
   '    <userTask id="createrSubmit" name="创建人提交" flowable:assignee="${initiator}" />\n' +
   '    <sequenceFlow id="sequenceFlow1" sourceRef="startEvent1" targetRef="createrSubmit"/>\n' +
   '  </process>\n' +
   '  <bpmndi:BPMNDiagram id="BPMNDiagram_PROCESS_ID">\n' +
   '    <bpmndi:BPMNPlane bpmnElement="PROCESS_ID" id="BPMNPlane_PROCESS_ID">\n' +
   '      <bpmndi:BPMNShape bpmnElement="startEvent1" id="BPMNShape_startEvent1">\n' +
   '        <omgdc:Bounds height="30.0" width="30.0" x="100.0" y="163.0"/>\n' +
   '      </bpmndi:BPMNShape>\n' +
   '      <bpmndi:BPMNShape bpmnElement="createrSubmit" id="BPMNShape_createrSubmit">\n' +
   '        <omgdc:Bounds height="80.0" width="100.0" x="175.0" y="138.0"/>\n' +
   '      </bpmndi:BPMNShape>\n' +
   '      <bpmndi:BPMNEdge bpmnElement="sequenceFlow1" id="BPMNEdge_sequenceFlow1">\n' +
   '        <omgdi:waypoint x="129.9499984899576" y="178.0"/>\n' +
   '        <omgdi:waypoint x="174.9999999999917" y="178.0"/>\n' +
   '      </bpmndi:BPMNEdge>\n' +
   '    </bpmndi:BPMNPlane>\n' +
   '  </bpmndi:BPMNDiagram>\n' +
   '</definitions>';
   export default xmlStr1