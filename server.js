'use strict'

const http = require('http')
const express = require('express')

const app = express()
const PORT = process.argv[2] || 8080

app.set('view engine', 'pug')

app.use(express.static(`public`))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/cards', (req, res) => {
  res.render('index')
})

app.get('/signup', (req, res) => {
  res.render('index')
})

app.get('/signin', (req, res) => {
  res.render('index')
})

app.get('/profile/:username', (req, res) => {
  res.render('index', { username: req.params.username })
  // res.send(req.params.username)
})

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`)
})
