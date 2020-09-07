const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const revenue = require("./data")

server.use(express.static('public'))
server.use(express.static('assets'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server
})

server.get("/", function(req, res) {
  return res.render("index", { items: courses.modules, links: courses.links })
})

server.get("/receitas", function(req, res) {
  return res.render("receitas", { items: courses.list, links: courses.links })
})

server.get("/sobre", function(req, res) {
  return res.render("sobre", { items: courses.list, links: courses.links })
})

server.use(function(req, res) {
  res.status(400);
 res.render('404');
 });


server.listen(5050, function() {

})