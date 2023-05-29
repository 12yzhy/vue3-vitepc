<template>

<div style="width: 500px;height: 180px;">
<a-upload-dragger
    name="file"
    :multiple="true"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    :before-upload="beforeUpload"
    @change="handleChange"
    @drop="handleDrop"
    directory
  >
    <p class="ant-upload-drag-icon">
      <inbox-outlined></inbox-outlined>
    </p>
    <p class="ant-upload-text"> 点击或拖拽在到这里上传</p>
    
  </a-upload-dragger>
</div>
<p>上传的文件名称：{{fileName}}</p>

</template>
<script lang="ts" setup>
import { InboxOutlined } from '@ant-design/icons-vue';
const fileName=ref<string>('')
const fileArr=ref([])        //每次上传文件数组(临时存储)
  // 文件上传点击

    function uploadFile(params:any,b: any,c: any) {
      console.log(params);
    //   var file = params.file,
    //     formData = new FormData();
    //   formData.append("uploadfile", file);
    //   console.log('自定义上传==>',file);
    //   fileName.value =file.webkitRelativePath.split("/")[0]; 
    }
     function handleDrop (e: any){
      console.log('-------->',e);
    }
     function beforeUpload (e: any,b){
      console.log('---beforeUpload----->',e,b);
      return false
    }
    function handleChange (e:any){
      console.log('---handleChange----->',e);
      if(e.event&&fileArr.value.length==0){
        fileArr.value=e.fileList.map((el:any)=>el.originFileObj)
        console.log(toRaw(fileArr.value) );
        selectFolder(toRaw(fileArr.value))
      }
      // console.log(file.fileList);
      // console.log('object');
      // console.log(file.event);
    }
    function selectFolder(arr: never[]) {
	//文件夹里面所有文件        
	var files = arr; 
    
	//文件夹名称        
	var relativePath = files[0].webkitRelativePath;        
	fileName.value = relativePath.split("/")[0];        
	//文件信息转换成FormData结构遍历上传    
	for (var i = 0; i < files.length; i++) {            
		var formData = new FormData();            
		formData.append('file', files[i])                      
		//上传            
		// uploadFiles(formData) 
    console.log(files[i],formData);       
		}    
	} 


</script>

<style lang="less" scoped></style>
