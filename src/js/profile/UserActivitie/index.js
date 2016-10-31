'use strict'

const yo = require('yo-yo')

const Comment = require('./../../Components/Comment')

module.exports = function UserActivitie () {
  return yo`
    <div class="UserActivitie">
      <div class="UserActivitie-activitiesContainer box">
        ${Comment()}
        ${Comment()}
        ${Comment()}
        ${Comment()}
        ${Comment()}
        ${Comment()}
      </div>
    </div>
  `
}
