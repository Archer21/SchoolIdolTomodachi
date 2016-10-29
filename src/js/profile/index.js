'use strict'

const page = require('page')
const empty = require('empty-element')

const template = require('./template')

page('/profile/Archer', function () {
  let layout = document.getElementById('layout-container')
  empty(layout).appendChild(template)
})
