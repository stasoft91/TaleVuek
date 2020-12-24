const { resolve } = require('path')

module.exports = function (moduleOptions) {
  // const options = {
  //   ...this.options.talevuek,
  //   ...moduleOptions
  // }

  this.addLayout({
    name: 'talevuek-layout',
    src: resolve(__dirname, 'talevuek-layout.vue')
  })

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'talevuek.js'
  })
}

module.exports.meta = require('../package.json')
