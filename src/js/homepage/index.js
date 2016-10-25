'use strict'

const page = require('page')
const empty = require('empty-element')

const template = require('./template')

const header = require('./../Middlewares/header')

page('/', header, function () {
  let el = document.getElementById('layout-container')
  empty(el).appendChild(template)
})
