var express = require('express')
var routes = require('./routes')
var app = express()

var PORT = 3000

app.get('/webapps', routes.webapps)

app.get('/add', routes.add)
app.get('/answer', routes.answer)

app.get('/', function (req, res) {
  res.send('<h1>Hello world</h1>')
})

app.get('/home', routes.home)

app.listen(PORT, function() {
  console.log('The server is listening on port', PORT)
})
