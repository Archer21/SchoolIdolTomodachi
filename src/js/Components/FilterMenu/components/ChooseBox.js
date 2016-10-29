'use strict'

const yo = require('yo-yo')

module.exports = function FilterIdol () {
  return yo`
    <div class="ChooseBox">
      <h4 class="ChooseBox-title subtitle">+ Promo Cards</h4>
      <div class="ChooseBox-options box">
        <span class="ChooseBox-option">All</span>
        <span class="ChooseBox-option">Only</span>
        <span class="ChooseBox-option">None</span>
      </div>
    </div>
  `
}

