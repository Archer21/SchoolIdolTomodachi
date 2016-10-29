'use strict'

const page = require('page')
const empty = require('empty-element')

const header = require('./../Middlewares/header')

const template = require('./template')

page('/signup', header, function () {
  let el = document.getElementById('layout-container')
  empty(el).appendChild(template)
})
