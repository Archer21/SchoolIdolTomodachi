'use strict'

const http = require('http')
const express = require('express')

const app = express()
const PORT = process.argv[2] || 8080

app.use(express.static(`public`))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`)
})

app.get('/cards', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`)  
})

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`)
})