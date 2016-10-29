'use strict'

const page = require('page')
const empty = require('empty-element')

const template = require('./template')

const header = require('./../Middlewares/header')


page('/profile/:username', header, function (ctx, next) {
  let layout = document.getElementById('layout-container')
  empty(layout).appendChild(template(ctx.params.username))
})
