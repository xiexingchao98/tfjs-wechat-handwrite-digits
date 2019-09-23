# tfjs-wechat-handwrite-digits

基于 Tensorflowjs 的微信小程序手写数字识别 Demo 。

> 仅供实训项目答辩使用（划水）

## 状况

目前在 PC 上训练好 Keras 模型后（准确率95%），将其导出为 Tensorflowjs 所能使用的格式。在小程序端导入模型进行预测，发现预测将结果基本上是错误的（错误率99%），但是在 PC 端导入 Keras 的 H5 模型文件预测相同的图片，其结果却是正确的。

因此推测在模型导出环节出现问题。

为了解决这一尴尬问题，决定在 Tensorflowjs 上直接训练好模型，然后提供给小程序端使用。

关于 CNN 模型训练，已有实际例子可供参考，连接在下方的参阅中。

## 使用

### 服务端

>由于小程序端无图片处理能力，无法直接生成模型预测所需的图片格式，所以此 Demo 将图片上传至服务端处理完成后，然后使用返回的结果在小程序端进行预测。

```
set FLASK_APP=format-image-server.py
flask run
```

### 客户端

```
npm i
微信开发者工具 -> 工具 -> 构建 npm
```

## 待办事项

+ [ ] 模型训练（项目改进）
+ [ ] 项目介绍PPT
+ [ ] 设计文档
+ [ ] 需求说明文档

## 参阅

Tensorflowjs CNN 训练手写数字识别 Model

https://codelabs.developers.google.com/codelabs/tfjs-training-classfication/index.html#0

小程序端使用 Tensorflowjs

https://github.com/tensorflow/tfjs-wechat

Tensorflowjs API

https://js.tensorflow.org/api/latest/

