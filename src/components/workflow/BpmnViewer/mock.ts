export const res ={
    "success": true,
    "code": 200,
    "msg": null,
    "data": {
        "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<definitions xmlns=\"http://www.omg.org/spec/BPMN/20100524/MODEL\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:bpmndi=\"http://www.omg.org/spec/BPMN/20100524/DI\" xmlns:omgdc=\"http://www.omg.org/spec/DD/20100524/DC\" xmlns:omgdi=\"http://www.omg.org/spec/DD/20100524/DI\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:flowable=\"http://flowable.org/bpmn\" targetNamespace=\"http://flowable.org/test\">\n  <process id=\"CONTRACT\" name=\"合同激活流程\" isExecutable=\"true\">\n    <startEvent id=\"startEvent1\" flowable:initiator=\"initiator\" />\n    <userTask id=\"createrSubmit\" name=\"创建人提交\" flowable:assignee=\"${initiator}\">\n      <outgoing>Flow_1r6wkpj</outgoing>\n    </userTask>\n    <sequenceFlow id=\"sequenceFlow1\" sourceRef=\"startEvent1\" targetRef=\"createrSubmit\" />\n    <userTask id=\"Activity_1qhr0we\" name=\"审批人\">\n      <incoming>Flow_1r6wkpj</incoming>\n      <outgoing>Flow_07n8g7n</outgoing>\n    </userTask>\n    <sequenceFlow id=\"Flow_1r6wkpj\" sourceRef=\"createrSubmit\" targetRef=\"Activity_1qhr0we\" />\n    <endEvent id=\"Event_1qdx926\">\n      <incoming>Flow_07n8g7n</incoming>\n    </endEvent>\n    <sequenceFlow id=\"Flow_07n8g7n\" sourceRef=\"Activity_1qhr0we\" targetRef=\"Event_1qdx926\" />\n  </process>\n  <bpmndi:BPMNDiagram id=\"BPMNDiagram_CONTRACT\">\n    <bpmndi:BPMNPlane id=\"BPMNPlane_CONTRACT\" bpmnElement=\"CONTRACT\">\n      <bpmndi:BPMNEdge id=\"BPMNEdge_sequenceFlow1\" bpmnElement=\"sequenceFlow1\">\n        <omgdi:waypoint x=\"129.9499984899576\" y=\"178\" />\n        <omgdi:waypoint x=\"174.9999999999917\" y=\"178\" />\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"Flow_1r6wkpj_di\" bpmnElement=\"Flow_1r6wkpj\">\n        <omgdi:waypoint x=\"275\" y=\"178\" />\n        <omgdi:waypoint x=\"320\" y=\"178\" />\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"Flow_07n8g7n_di\" bpmnElement=\"Flow_07n8g7n\">\n        <omgdi:waypoint x=\"420\" y=\"178\" />\n        <omgdi:waypoint x=\"472\" y=\"178\" />\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNShape id=\"BPMNShape_startEvent1\" bpmnElement=\"startEvent1\">\n        <omgdc:Bounds x=\"100\" y=\"163\" width=\"30\" height=\"30\" />\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"BPMNShape_createrSubmit\" bpmnElement=\"createrSubmit\">\n        <omgdc:Bounds x=\"175\" y=\"138\" width=\"100\" height=\"80\" />\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"Activity_1qhr0we_di\" bpmnElement=\"Activity_1qhr0we\">\n        <omgdc:Bounds x=\"320\" y=\"138\" width=\"100\" height=\"80\" />\n        <bpmndi:BPMNLabel />\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"Event_1qdx926_di\" bpmnElement=\"Event_1qdx926\">\n        <omgdc:Bounds x=\"472\" y=\"160\" width=\"36\" height=\"36\" />\n      </bpmndi:BPMNShape>\n    </bpmndi:BPMNPlane>\n  </bpmndi:BPMNDiagram>\n</definitions>\n",
        "actInsts": [
            {
                "executionId": "69dc1664-1c95-11ee-bc25-ce4eaa4d63e1",
                "actDefKey": "Activity_1qhr0we",
                "actType": "userTask",
                "taskAssignee": null,
                "endTime": null,
                "deleteReason": null,
                "className": "red",
                "moveToActDefKey": null
            },
            {
                "executionId": "69dc1664-1c95-11ee-bc25-ce4eaa4d63e1",
                "actDefKey": "Flow_1r6wkpj",
                "actType": "sequenceFlow",
                "taskAssignee": null,
                "endTime": null,
                "deleteReason": null,
                "className": "green",
                "moveToActDefKey": null
            },
            {
                "executionId": "69dc1664-1c95-11ee-bc25-ce4eaa4d63e1",
                "actDefKey": "createrSubmit",
                "actType": "userTask",
                "taskAssignee": null,
                "endTime": null,
                "deleteReason": null,
                "className": "green",
                "moveToActDefKey": null
            },
            {
                "executionId": "69dc1664-1c95-11ee-bc25-ce4eaa4d63e1",
                "actDefKey": "startEvent1",
                "actType": "startEvent",
                "taskAssignee": null,
                "endTime": null,
                "deleteReason": null,
                "className": "green",
                "moveToActDefKey": null
            },
            {
                "executionId": "69dc1664-1c95-11ee-bc25-ce4eaa4d63e1",
                "actDefKey": "sequenceFlow1",
                "actType": "sequenceFlow",
                "taskAssignee": null,
                "endTime": null,
                "deleteReason": null,
                "className": "green",
                "moveToActDefKey": null
            }
        ]
    },
    "time": "2023-07-10T15:19:49.956503"
}