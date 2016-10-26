'use strict'

const yo = require('yo-yo')

module.exports = function renderFavIdol () {
  return yo`
    <div class="Right">
      <div class="Right-favoriteIdolContainer">
        <div class="FavoriteIdol">
        </div>
      </div>

      <div class="Right-followBoxContainer">
        <div class="FollowBox">
          <a href="#" class="FollowBox-link">
            Sigue a School Idol Tomodachi en Twitter
          </a>

          <div class="FollowBox-followContainer">
            <a href="#" class="PresentBox">
              <img src="present.png" alt="" class="PresentBox-info">
            </a>
          </div>
        </div>
      </div>
    </div>
  `
}
