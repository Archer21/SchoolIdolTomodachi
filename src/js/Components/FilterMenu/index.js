'use strict'

const yo = require('yo-yo')

const SearchBox = require('./components/SearchBox')
const FilterIdol = require('./components/FilterIdol')
const StatBox = require('./components/StatBox')
const CheckBox = require('./components/CheckBox')
const ChooseBox = require('./components/ChooseBox')
const SelectBox = require('./components/SelectBox')
const GroupBox = require('./components/GroupBox')

module.exports = function renderFilterMenu () {
  return yo`
    <div class="Right">
      <div class="Right-cards">
        <div class="FilterMenu">

          <h3 class="FilterMenu-title">Search</h3>
          <div class="FilterMenu-searchBoxContainer box">
            ${SearchBox()}
          </div>

          <h3 class="FilterMenu-title">Filter</h3>
          <div class="FilterBox box">

            <div class="FilterBox-filterIdolContainer box">
              ${FilterIdol()}
            </div>

            <div class="FilterBox-statBoxContainer box">
              ${StatBox()}
            </div>           

            <div class="FilterMenu-checkBoxContainer box">
              ${CheckBox()}
            </div>

            <button class="FilterBox-more button box">...more options</button>
            
            <div class="FilterBox-moreOptions box">

              <div class="FilterBox-chooseBoxContainer box">  
                ${ChooseBox()}          
              </div>


              <div class="FilterBox-selectBoxContainer box">
                ${SelectBox()}
              </div>

              <div class="FilterBox-groupBoxContainer box">
                ${GroupBox()}
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  `
}
