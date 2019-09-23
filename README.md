# tfjs-wechat-handwrite-digits

基于 Tensorflowjs 的微信小程序手写数字识别 Demo 。

> 仅供实训项目答辩使用（划水）

## 使用

### 模型训练

模型文件夹为 `model`

```
python train.py
```

### 服务端图片处理

>由于小程序端无图片处理能力，无法直接生成模型预测所需的图片格式，所以此 Demo 将图片上传至服务端处理完成后，然后使用返回的结果在小程序端进行预测。

```
set FLASK_APP=format-image-server.py
flask run
```

### 小程序

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

