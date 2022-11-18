<template>
  <div class="contain-bigfile">
    <div class="left">
      <!-- <a-upload
        :file-list="fileList"
        :before-upload="beforeUpload"
        @remove="handleRemove"
        maxCount="1"
      >
        <a-button>
          <upload-outlined></upload-outlined>
          大文件上传
        </a-button>
      </a-upload>
      <a-button
        type="primary"
        :disabled="fileList.length === 0"
        :loading="uploading"
        style="margin-top: 16px"
        @click="handleUpload"
      >
        {{ uploading ? 'Uploading' : 'Start Upload' }}
      </a-button> -->
      <!-- 只能用原生 -->
      <input type="file" @change="handleFileChange" />
      <a-button @click="handleUpload"> 上传 </a-button>
    </div>
    <div class="right">上传后的展示</div>
  </div>
</template>
<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { axiosRequest } from './axioself'
let fileObj = reactive<any>({
  file: ''
})
// 选择文件
const handleFileChange = (e: any) => {
  const [file] = e.target.files
  if (!file) return
  console.log(file)
  fileObj.file = file
}

function createChunk(file: any, size = 5 * 1024 * 1024) {
  const chunkList = []
  let cur = 0
  while (cur < file.size) {
    // 使用slice方法切片
    chunkList.push({ file: file.slice(cur, cur + size) })
    cur += size
  }
  return chunkList
}

const handleUpload = () => {
  // const fileObj1 = {}
  // Object.assign(fileObj1, fileObj)
  // // debugger

  console.log('object', fileObj.file)
  if (!fileObj.file) return
  // 开始分割
  const chunkList = createChunk(fileObj.file)
  console.log('分片列表', chunkList) // 看看chunkList长什么样子
  //先保存分片列表
  fileObj.chunkList = chunkList.map((el, i) => ({
    file: el.file,
    size: el.file.size,
    percent: 0,
    chunkName: `${fileObj.file.name}-${i}`,
    fileName: fileObj.file.name,
    i
  }))
  uploadChunks()
}
const uploadChunks = async () => {
  const requestList = fileObj.chunkList
    .map(({ file, fileName, index, chunkName }: any) => {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('fileName', fileName)
      formData.append('chunkName', chunkName)
      return { formData, index }
    })
    .map(({ formData, index }: any) =>
      axiosRequest({
        url: 'http://localhost:3000/upload',
        data: formData,
        onUploadProgress: createProgressHandler(fileObj.chunkList[index]) // 传入监听上传进度回调
      })
    )
  console.log('开始上传的axios==>', requestList)
  await Promise.all(requestList) // 使用Promise.all进行请求
}
const createProgressHandler = (item: any) => {
  return (e) => {
    // 设置每一个切片的进度百分比
    item.percent = parseInt(String((e.loaded / e.total) * 100))
  }
}
</script>
<style lang="less" scoped>
.contain-bigfile {
  width: 100%;
  display: flex;
  .left {
    width: 40%;
  }
}
</style>
