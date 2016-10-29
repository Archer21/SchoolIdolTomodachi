'use strict'

const yo = require('yo-yo')

module.exports = function SearchBox () {
  return yo`
    <div class="SearchBox boxShadow">
      <input type="text" class="SearchBox-search" placeholder="Search..."/>
    </div>
  `
}
