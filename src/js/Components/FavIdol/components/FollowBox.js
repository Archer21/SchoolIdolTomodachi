'use strict'

const yo = require('yo-yo')

const PresentBox = require('./../../PresentBox')

module.exports = function FollowBox () {
  return yo`
    <div class="FollowBox">
      <a href="#" class="FollowBox-link">
        Sigue a School Idol Tomodachi en Twitter
      </a>

      <div class="FollowBox-followContainer">
        ${PresentBox()}
      </div>
    </div>
  `
}


