'use strict'

const yo = require('yo-yo')

module.exports = function StatBox () {
  return yo`
    <div class="StatBox">
      <h4 class="StatBox-title subtitle">Rarity</h4>
      <div class="StatBox-items">
        <div class="StatBox-imageContainer">
          <img src="statbox-icon.png" alt="rarity" class="StatBox-image"/>
        </div>
      </div>
    </div>
  `
}


