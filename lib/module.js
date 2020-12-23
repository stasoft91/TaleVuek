const { resolve } = require('path')

module.exports = function (moduleOptions) {
  const options = {
    ...this.options.talevuek,
    ...moduleOptions
  }

  const taleVuekPage = {
    name: 'TaleVuek',
    path: '/talevuek',
    chunkName: 'talevuek',
    component: resolve(__dirname, 'index.vue')
  }

  // inject the new route
  this.extendRoutes((routes) => {
    routes.unshift(taleVuekPage)
  })

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'talevuek.js',
    options
  })

  const moduleDirExploded = __dirname.split('/')
  while (moduleDirExploded.pop() !== 'node_modules' && moduleDirExploded.length !== 0) { ; }
  const pathToParentNuxt = moduleDirExploded.join('/')
  console.log(pathToParentNuxt)
}

module.exports.meta = require('../package.json')
