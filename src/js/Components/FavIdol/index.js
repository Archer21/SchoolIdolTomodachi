'use strict'

const yo = require('yo-yo')

const FollowBox = require('./components/FollowBox')

module.exports = function renderFavIdol () {
  return yo`
    <div class="Right">
      <div class="Right-homepage">
        <div class="Right-favoriteIdolContainer">
          <div class="FavoriteIdol">
          </div>
        </div>

        <div class="Right-followBoxContainer">
          ${FollowBox()}
        </div>
      </div>
    </div>
  `
}
