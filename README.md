# tfjs-wechat-handwrite-digits

基于 Tensorflowjs 的微信小程序手写数字识别 Demo 。

> 仅供实训项目答辩使用（划水）

## 使用

### 模型训练

> 目前的准确率 acc: 0.9771

模型文件夹为 model ，训练时会从 checkpoint 中加载暂存点继续之前的训练，每次训练完成后都会更新 checkpoint 文件，同时会生成 tensorflowjs 的 model 文件。

另外小程序端是从当前仓库的 model 文件夹中获取模型数据，更新模型后直接推送至仓库即可。


```
# 开始训练
python train.py
```

### 服务端图片处理

>由于小程序端无图片处理能力，无法直接生成模型预测所需的图片格式，所以此 Demo 将图片上传至服务端处理完成后，然后使用返回的结果在小程序端进行预测。

小程序端默认调用远程服务器地址，如需开启本地调试，步骤如下：

```
set FLASK_APP=format-image-server.py
flask run
```

然后，[更改文件上传 URL](https://github.com/xiexingchao98/tfjs-wechat-handwrite-digits/blob/7f142fdadd1d93b8251def9a7b7aae60726bb022/handwrite-digits-demo/pages/index/index.js#L64)

### 小程序

```
npm i
微信开发者工具 -> 工具 -> 构建 npm
```

默认已给组成员分配开发者权限，所以无需更改 APPID 即可直接导入项目开发测试。

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

