const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipes = require("./data")

server.use(express.static('public'))
server.use(express.static('assets'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server
})

server.get("/", function(req, res) {
  return res.render("home", { items: recipes.recipe })
})

server.get("/receitas", function(req, res) {
  return res.render("receitas", { items: recipes.recipe })
})

server.get("/sobre", function(req, res) {
  return res.render("sobre")
})

server.use(function(req, res) {
  res.status(400);
 res.render('404');
 });


server.listen(5050, function() {

})