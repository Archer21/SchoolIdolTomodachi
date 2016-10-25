'use strict'

const yo = require('yo-yo')

module.exports = function Comment () {
  return yo`
    <div class="Comment">
      <span class="Comment-date">Oct. 23, 2016, 3:34 a.m.</span>
      <span class="Comment-user">Archerx EN</span>
      <p class="Comment-content">
        What if KLab give us Ship Badges? Like you would play a duet song and if you only play it with the specific singers, you'd get the badge? wouldn't it be a great idea?
      </p>
      <div class="Comment-infoContainer">
        <ul class="Comment-details CommentMenu">
          <a href="#" class="CommentMenu-link">+ Like</a>
          <a href="#" class="CommentMenu-link">87</a>
          <a href="#" class="CommentMenu-link">+ Write comment</a>
          <a href="#" class="CommentMenu-link">Comments</a>
          <a href="#" class="CommentMenu-link">+ Report</a>
        </ul>
      </div>
    </div>
  `
}