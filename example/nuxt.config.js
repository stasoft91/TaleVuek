const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  modules: [
    { handler: require('../') }
  ],
  build: {
    extend (config) {
      config.resolve.alias.talevuek = resolve(__dirname, '..')
      config.resolve.alias['@'] = resolve(__dirname)
    }
  },
  talevuek: {
    enabled: true
  }
}
