var tfl = require('@tensorflow/tfjs-layers')
var tf = require('@tensorflow/tfjs-core')

var model
const app = getApp()
var ctx = wx.createCanvasContext('canvas')
var prevX = 0
var prevY = 0
ctx.lineWidth = 10
ctx.lineCap = 'round'
ctx.save()

Page({
  data: {
    tempFilePath: '',
  },
  async onLoad() {
    // 加载模型
    model =  await tfl.loadLayersModel('https://xiexingchao.ink/tfjs/model/model.json')
    console.log('model loaded')
    // 显示模型摘要
    model.summary()
  },
  /*
   * 画布功能区域
   */
  touchStart(e) {
    // console.log('touchStart', e)
    prevX = e.touches[0].x
    prevY = e.touches[0].y
  },
  touchMove(e) {
    // console.log('touchMove', e)
    ctx.moveTo(prevX, prevY)
    ctx.lineTo(e.touches[0].x, e.touches[0].y)
    prevX = e.touches[0].x
    prevY = e.touches[0].y
    ctx.stroke()
    ctx.draw(true)
  },
  touchend(e) {
    // console.log('touchEnd', e)
  },
  clearCanvas() {
    console.log('clearCanvas')
    ctx.clearRect(0, 0, 99999, 99999)
    ctx.draw(true)
  },
  guess() {
    console.log('guess')
    let that = this
    // 小程序端无图片处理能力，上传至服务器处理后返回结果
    wx.canvasToTempFilePath({
      canvasId: 'canvas',
      x: 0,
      y: 0,
      destWidth: 200,
      destHeight: 200,
      quality: 1,
      success: (res) => {
        that.setData({ tempFilePath: res.tempFilePath })
        wx.uploadFile({
          // 本地测试地址
          url: 'http://localhost:5000/format_image',
          filePath: res.tempFilePath,
          name: 'image',
          success: (res) => {
            let tensor = tf.tensor2d(JSON.parse(res.data))
            tensor.print()
            // 使用模型进行预测
            let prediction = model.predict(tensor.expandDims(0))
            // 显示预测结果集
            prediction.print()
            // 显示实际预测结果
            prediction.argMax(1).print()
          }
        })
      },
      fail: (err) => {
        console.log(err)
      }  
    })
  }
})
