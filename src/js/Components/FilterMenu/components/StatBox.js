'use strict'

const yo = require('yo-yo')

module.exports = function StatBox (title, icons) {
  return yo`
    <div class="StatBox">
      <h4 class="StatBox-title subtitle">${title}</h4>
      <div class="StatBox-items">
        
        ${
          icons.map(icon => {
            return yo`
              <div class="StatBox-imageContainer">
                <img src="/${icon}" alt="${icon}" class="StatBox-image"/>
              </div>
            `
          })
        }
      </div>
    </div>
  `
}

