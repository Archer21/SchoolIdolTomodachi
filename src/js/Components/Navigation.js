'use strict'

const yo = require('yo-yo')

const Avatar = require('./Avatar')

let el = yo`
  <nav class="Navigation">
    <ul class="Navigation-list">
      <li class="Navigation-item">
        <a href="#" class="Navigation-link">+Cards</a>
      </li>
      <li class="Navigation-item"><a href="#" class="Navigation-link">+ Idols</a></li>
      <li class="Navigation-item"><a href="#" class="Navigation-link">+ Songs</a></li>
      <li class="Navigation-item"><a href="#" class="Navigation-link">+ Evens</a></li>
      <li class="Navigation-item"><a href="#" class="Navigation-link">+ Fun</a></li>
      <li class="Navigation-item"><a href="#" class="Navigation-link">+ Players</a></li>
      <li class="Navigation-item Navigation-itemAvatar">
        <a href="#" class="Navigation-link Navigation-itemAvatarLink">
          <div class="Navigation-avatarContainer">
            ${Avatar()}
          </div>
          <span class="Avatar-username">Archerx</span>
        </a>
      </li>
      <li class="Navigation-item"><button class="Navigation-link Navigation-button">...</button></li>
    </ul>
  </nav>
`

module.exports = el