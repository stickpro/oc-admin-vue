module.exports = {
    filenameHashing: false,
    chainWebpack(config) {
      config.optimization.delete('splitChunks')
      config.plugins.delete('prefetch')
      config.output.set('jsonpFunction', 'customWebpackJsonp')
  },
  }