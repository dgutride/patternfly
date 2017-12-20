const path = require('path')
const bs = require('browser-sync').create()
const navigation = require('./middleware/navigation')
const router = require('./router')

bs.startServer = function () {
  this.init({
    server: {
      baseDir: [
        path.resolve(__dirname, 'public')
      ]
    },
    files: [
      path.resolve(__dirname, '../dist'),
      path.resolve(__dirname, '../docs')
    ],
    middleware: [navigation, router],
    port: 4200,
    open: false,
    notify: true
  })
}

if (require.main === module) {
  bs.startServer()
} else {
  module.exports = bs
}