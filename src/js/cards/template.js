'use strict'

const yo = require('yo-yo')

const layout = require('./../layout')
// const aside = require('./../aside')
const LayoutCards = require('./Layout-cards')

let el = yo`
  <div class="ContentContainer">
    ${layout(LayoutCards)}
  </div>
`

module.exports = el
