var fetchWechat = require('fetch-wechat')
var tf = require('@tensorflow/tfjs-core')
var tfl = require('@tensorflow/tfjs-layers')
var plugin = requirePlugin('tfjsPlugin')

App({
  onLaunch: function () {
    plugin.configPlugin({
      // polyfill fetch function
      fetchFunc: fetchWechat.fetchFunc(),
      // inject tfjs runtime
      tf,
      tfl,
      // provide webgl canvas
      canvas: wx.createOffscreenCanvas()
    })
  }
})