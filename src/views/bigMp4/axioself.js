import axios from "axios";

export function axiosRequest({
    url,
    method = "post",
    data,
    headers = {},
    onUploadProgress = (e) => e, // 进度回调
}) {
    return new Promise((resolve, reject) => {
        axios[method](url, data, {
            headers,
            onUploadProgress, // 传入监听进度回调
        })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

/* 
大文件上传：
1.先将大文件切片，






*/