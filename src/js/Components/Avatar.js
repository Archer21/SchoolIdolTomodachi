'use strict'

const yo = require('yo-yo')

module.exports = function Avatar () {
  return yo `
    <div class="Avatar">
      <img src="/avatar.png" alt="avatar" class="Avatar-image" />
    </div>
  `
}

