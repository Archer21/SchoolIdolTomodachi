'use strict'

const yo = require('yo-yo')

module.exports = function FilterIdol () {
  return yo`
    <div class="SelectBox">
      <h4 class="SelectBox-title subtitle">Skill</h4>
      <select class="SelectBox-options box">
        <option class="SelectBox-option">Score Up (217)</option>
        <option class="SelectBox-option">Perfect Lock (167)</option>
        <option class="SelectBox-option">Healer (134)</option>
      </select>
    </div>
  `
}


