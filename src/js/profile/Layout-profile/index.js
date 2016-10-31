'use strict'

const yo = require('yo-yo')

const Avatar = require('./../../Components/Avatar')
const UserActivitie = require('./../UserActivitie')
module.exports = yo`

  <div class="Layout-profile">
    <div className="UserInfo">
      <section class="UserInfo-bio">
        <div class="UserInfo-body box">
          
          <div class="UserInfo-avatarContainer">
            ${Avatar()}
          </div>

          <div class="UserInfo-about">
            Will be implemented Soon.
          </div>

          <div class="UserInfo-followContainer">
            <div class="FollowUser">
              <a href="#" class="FollowUser-follow button">Follow</a>
              <span class="FollowUser-followers">142 followers</span>
              <span class="FollowUser-following">127 following</span>            
              <a href="#" class="FollowUser-sendMessage button">Send Message</a>
            </div>
          </div>

        </div>

        <div class="UserInfo-goalsContainer box">
          <h2 class="UserInfo-title">Goals:</h2>
          <ul class="Goals">
            <li class="Goals-item">Item 1</li>
            <li class="Goals-item">Item 2</li>
            <li class="Goals-item">Item 3</li>
            <li class="Goals-item">Item 4</li>
            <li class="Goals-item">Item 5</li>
          </ul>
        </div>

        <footer class="UserInfo-footer box">
          <ul class="UserInfo-footerList">
            <li class="UserInfo-item">
              <a href="#" class="UserInfo-link">
                <span class="UserInfo-linkTitle">Best Girl</span>
                <span class="UserInfo-linkValue">Nishikino Maki</span>
              </a>
            </li>

            <li class="UserInfo-item">
              <a href="#" class="UserInfo-link">
                <span class="UserInfo-linkTitle">Location</span>
                <span class="UserInfo-linkValue">Danville, Iowa</span>
              </a>
            </li>

            <li class="UserInfo-item">
              <a href="#" class="UserInfo-link">
                <span class="UserInfo-linkTitle">Birthdate</span>
                <span class="UserInfo-linkValue">1994-03-31 (21 years old)</span>
              </a>
            </li>

            <li class="UserInfo-item">
              <a href="#" class="UserInfo-link">
                <span class="UserInfo-linkTitle">Tumblr</span>
                <span class="UserInfo-linkValue">Archer</span>
              </a>
            </li>

            <li class="UserInfo-item">
              <a href="#" class="UserInfo-link">
                <span class="UserInfo-linkTitle">Devianart</span>
                <span class="UserInfo-linkValue">Archer</span>
              </a>
            </li>

            <li class="UserInfo-item">
              <a href="#" class="UserInfo-link">
                <span class="UserInfo-linkTitle">Twitter</span>
                <span class="UserInfo-linkValue">@archerx18</span>
              </a>
            </li>

            <li class="UserInfo-item">
              <a href="#" class="UserInfo-link">
                <span class="UserInfo-linkTitle">MyAnimeList</span>
                <span class="UserInfo-linkValue">Archer</span>
              </a>
            </li>

            <li class="UserInfo-item">
              <a href="#" class="UserInfo-link">
                <span class="UserInfo-linkTitle">Instagram</span>
                <span class="UserInfo-linkValue">Archerx21</span>
              </a>
            </li>
          </ul>
        </footer>


      </section>
    </div>
    ${UserActivitie()}
  </div>

`