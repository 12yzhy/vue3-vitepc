<template>
  <div>
    attr和listeners,provide/inject（父组件）
    <hr />
    <Child @parentFun="parentFun" :msg1="msg1" :msg2="msg2" />
    <hr>
    <hr>
    <input type="file" @change="(e)=>selectFolder(e)" webkitdirectory />
  </div>
</template>
<script lang="ts" setup>
import Child from './child.vue'
const msg1 = ref('子组件msg1')
const msg2 = ref('子组件msg2')
const parentFun = (val: string) => {
  console.log(`父组件方法被调用,获得子组件传值：${val}`)
}
function selectFolder(e: { target: { files: any; }; }) {
	//文件夹里面所有文件        
	var files = e.target.files; 
    
	//文件夹名称        
	var relativePath = files[0].webkitRelativePath;        
	var folderName = relativePath.split("/")[0];        
	//文件信息转换成FormData结构遍历上传    
  console.log('上传的文件夹名称 ',folderName);    
	for (var i = 0; i < files.length; i++) {            
		var formData = new FormData();            
		formData.append('file', files[i])                      
		//上传            
		// uploadFiles(formData) 
    console.log(files[i],formData);       
		}    
	} 
provide('msg1', msg1)
provide('msg2', msg2)

//
</script>
<style lang="less" scoped></style>
