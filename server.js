'use strict'

const http = require('http')
const express = require('express')
const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

const server = http.createServer(app)

server.listen(8080, function () {
  console.log('Server running in port 8080')
})