var express = require("express");
// instatiate express
var app = express()

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'))


app.get('/', function(req, res){
  // high level express function takes car of piping, etc
  res.render('index')
})

app.get('/contact', function(req, res){
  console.log(req.query)
  res.render('contact')
})

app.get('/profile/:name', function(req, res){
  var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'running']}
  // first argument to render tells it which ejs file to pass
  // second argument is an object that gets passed to the ejs file
  res.render('profile', {person: req.params.name, data: data})
})

app.listen(3000)
