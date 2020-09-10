const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))
server.use(express.static('assets'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

server.get("/", function(req, res) {
  const data = {
    avatar_url: "/img/avatar.png",
    name: "André Luis Bonfim",
    role: "Entusiasta em Desenvolvimento Front-End | HTML | CSS | Javascript | Node JS | React",
    links: [
      { name: "Github", url: "https://github.com/andrebonfim", icon: "fab fa-github-square" },
      { name: "Linkedin", url: "https://www.linkedin.com/in/andreluisbonfim/", icon: "fab fa-linkedin" },
      { name: "Twitter", url: "https://twitter.com/andre_bmta", icon: "fab fa-twitter-square" }
    ]
  }

  return res.render("about", { about: data })
})

server.get("/portfolio", function(req, res) {
  return res.render("portfolio", { items: videos })
})

server.get("/video", function(req, res) {
  const id = req.query.id

  const video = videos.find(function(video){
    if (video.id == id) {
      return true
    }
  })

  if (!video) {
    return res.send("Video não encontrado!")
  }

  return res.render("video", { item: video })
})

server.listen(5050, function() {

})