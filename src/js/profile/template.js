'use strict'

const yo = require('yo-yo')

const layout = require('./../layout')
const LayoutProfile = require('./Layout-profile')
const UserActivitie = require('./UserActivitie')

let el = yo`
  <div class="Container-profile">
    ${layout(LayoutProfile)}
  </div>
`

module.exports = el
// ${favIdol()}
