var test = require('tape')
var routes = require('./routes')

test('routes.home responds with index.html', function (t) {
  var res = { sendFile: sendFile }

  routes.home(null, res)

  function sendFile (file) {
    t.equals(file, __dirname + '/index.html')
    t.end()
  }
})

test('routes.webapps response includes a querystring parameter', function (t) {
  var res = { send: send }
  var req = { query: { name: 'Robin' } }

  routes.webapps(req, res)

  function send (msg) {
    t.equals(msg, 'Robin is building web apps')
    t.end()
  }
})

test('routes.webapps response includes a querystring parameter', function (t) {
  var res = { send: send }
  var req = { query: { name: 'Robin' } }

  routes.webapps(req, res)

  function send (msg) {
    t.equals(msg, 'Robin is building web apps')
    t.end()
  }
})

test('routes.add saves numeric operands on the server', function(t){
    var res = { send: function(){}}
    var req = {
      query: {
        op1: '11',
        op2: '22'
      },
      app: {
        locals: {}
      }
    }

  routes.add(req, res)

  t.equals(req.app.locals.op1, 11)
  t.equals(req.app.locals.op2, 22)
  t.end()

})
