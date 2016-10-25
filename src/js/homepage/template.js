'use strict'

const yo = require('yo-yo')

const layout = require('./../layout')
const aside = require('./../aside')
const LayoutHome = require('./Layout-home')

let el = yo`
  <div class="ContentContainer">
    ${layout(LayoutHome)}
    ${aside()}
  </div>
`

module.exports = el
