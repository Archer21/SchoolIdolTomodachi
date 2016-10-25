'use strict'

const yo = require('yo-yo')

const Avatar = require('./Avatar')
const Comment = require('./Comment')

module.exports = function CommentBox () {
  return yo`
    <div class="CommentBox">
              
      <div class="CommentBox-avatarContainer">                 
        ${Avatar()}
      </div>

      <div class="CommentBox-commentContainer">
        ${Comment()}
      </div>
        
    </div> 
  `  
}