'use strict'

const yo = require('yo-yo')

module.exports = function FilterIdol () {
  return yo`
    <div class="GroupBox">
      <h4 class="GroupBox-title subtitle">Main Unit</h4>
      <div class="GroupBox-groups box">
        <img src="museIcon.png" alt="muse" class="GroupBox-group"/>
        <img src="museIcon.png" alt="muse" class="GroupBox-group"/>
        <img src="museIcon.png" alt="muse" class="GroupBox-group"/>
      </div>
    </div>
  `
}


