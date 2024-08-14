<template>
  <div >
    <JsonEditorVue v-model="jsonStr"
     :modeList="couldView"
     :currentMode="'tree'" 
     @update:modelValue="updateModelValue">
    </JsonEditorVue>

  </div>
</template>
<script lang="ts" setup>
import JsonEditorVue from 'json-editor-vue3'
const obj = reactive({})
const num = ref()
const jsonStr = ref({ "key": "key", "value": "value" })


const couldView = ref(["tree", "code", "form", "view"])
const updateModelValue = (val: unknown) => {
    console.log(val,"修改了值");
}

</script>
<style lang="less" scoped></style>
