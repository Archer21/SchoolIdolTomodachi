'use strict'

const yo = require('yo-yo')

const layout = require('./../layout')
const favIdol = require('./../Components/FavIdol')
const LayoutHome = require('./Layout-home')

let el = yo`
  <div class="Container-homepage">
    ${layout(LayoutHome)}
    ${favIdol()}
  </div>
`

module.exports = el
