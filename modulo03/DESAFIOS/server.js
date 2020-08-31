const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))
server.use(express.static('assets'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server
})

server.get("/", function(req, res) {
  return res.render("courses")
})

server.get("/about", function(req, res) {
  return res.render("about")
})

server.use(function(req, res) {
  res.status(400);
 res.render('404');
 });

server.listen(5000, function() {

})