'use strict'

const yo = require('yo-yo')

const layout = require('./../layout')
const aside = require('./../aside')
const LayoutInfo = require('./Layout-info')

let el = yo`
  <div class="ContentContainer">
    ${layout(LayoutInfo)}
    ${aside()}
  </div>
`

module.exports = el
