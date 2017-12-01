var express = require("express");
// instatiate express
var app = express()

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  // high level express function
  res.sendFile(__dirname + '/index.html')
})

app.get('/contact', function(req, res){
  // high level express function
  res.sendFile(__dirname + '/contacts.html')
})

app.get('/profile/:name', function(req, res){
  var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'running']}
  // first argument to render is import, tells it which ejs file to pass
  // second argument to
  res.render('profile', {person: req.params.name, data: data})
})

app.listen(3000)
