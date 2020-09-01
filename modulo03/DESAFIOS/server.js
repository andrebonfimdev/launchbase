const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const courses = require("./data")

server.use(express.static('public'))
server.use(express.static('assets'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server
})

server.get("/", function(req, res) {
  return res.render("courses", { items: courses.modules, links: courses.links })
})

server.get("/about", function(req, res) {
  return res.render("about", { items: courses.list, links: courses.links })
})

// server.get("/course", function(req, res) {
//   const id = req.query.id

//   const course = courses.modules.find(function(course){
//     if (course.id == id) {
//       return true
//     }
//   })

//   if (!course) {
//     return res.send("Curso não encontrado!")
//   }

//   return res.render("course", { item: course})
// })

server.use(function(req, res) {
  res.status(400);
 res.render('404');
 });


server.listen(5000, function() {

})