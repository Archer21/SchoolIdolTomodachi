'use strict'

const yo = require('yo-yo')

module.exports = function PresentBox () {
  return yo`
    <a href="#" class="PresentBox">
      <img src="present.png" alt="" class="PresentBox-info">
    </a>
  `
}

