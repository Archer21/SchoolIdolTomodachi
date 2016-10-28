'use strict'

const yo = require('yo-yo')

const Banner = require('./../../Components/Banner')
const Cards = require('./../../Components/Cards')

let el = yo`
  <div class="Layout-cards">
    
    <div class="Layout-bannerContainer">
      ${Banner}
    </div>

    <div class="Layout-cardsContainer">
      ${Cards()}
    </div>
  </div>
`

module.exports = el
