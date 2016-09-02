module.exports = {
  index:index,
  home: home,
  webapps: webapps,
  add: add,
  answer: answer
}

function index (req, res) {
  res.send('<h1>Hello world</h1>')
}

function home (req, res) {
  res.sendFile(__dirname + '/index.html')
}

function webapps (req, res) {
  res.send(req.query.name + ' is building web apps')
}

function add (req, res) {
  req.app.locals.op1 = parseInt(req.query.op1, 10)
  req.app.locals.op2 = parseInt(req.query.op2, 10)
  res.send('Got it. <a href="/answer">Is this the answer?</a>')
}

function answer (req, res) {
  var result = req.app.locals.op1 + req.app.locals.op2
  res.send('I hope you are expecting ' + result)
}
