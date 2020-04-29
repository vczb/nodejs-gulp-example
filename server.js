var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()
app.use(serveStatic(path.join(__dirname, 'public')))

var port = process.env.PORT || 3000
app.listen(port)
console.log('server started on: http://0.0.0.0:' + port)
