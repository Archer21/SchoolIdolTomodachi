'use strict'

const yo = require('yo-yo')

module.exports = function renderFilterMenu () {
  return yo`
    <div class="Right">
      <div className="Right-cards">
        <div className="FilterMenu">
          <h3 className="FilterMenu-title">Here will be the Filter Menu</h3>
          <div className="SearchBox">
            <input type="text" className="SearchBox-search" placeholder="Search..."/>
          </div>
        </div>
      </div>
    </div>
  `
}
