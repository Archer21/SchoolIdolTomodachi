'use strict'

const yo = require('yo-yo')

module.exports = function FilterIdol () {
  return yo`
    <div class="CheckBox">
      <label class="CheckBox-text">+ Worldwide only</label>
      <input type="checkbox" class="CheckBox-check"/>
    </div>
  `
}


