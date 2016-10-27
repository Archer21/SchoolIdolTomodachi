'use strict'

const yo = require('yo-yo')

const layout = require('./../layout')
const FilterMenu = require('./../Components/FilterMenu')
const LayoutCards = require('./Layout-cards')

let el = yo`
  <div class="ContentContainer">
    ${layout(LayoutCards)}
    ${FilterMenu()}
  </div>
`

module.exports = el
