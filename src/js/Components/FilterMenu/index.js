'use strict'

const yo = require('yo-yo')

module.exports = function renderFilterMenu () {
  return yo`
    <div class="Right">
      <div className="Right-cards">
        <div className="FilterMenu">

          <h3 className="FilterMenu-title">Search</h3>
          <div className="FilterMenu-searchBoxContainer box">
            <div className="SearchBox boxShadow">
              <input type="text" className="SearchBox-search" placeholder="Search..."/>
            </div>
          </div>

          <h3 className="FilterMenu-title">Filter</h3>
          <div className="FilterBox box">

            <div className="FilterBox-filterIdolContainer box">
              <div className="FilterIdol">
                <h4 className="FilterIdol-title subtitle">Idol</h4>
                <button className="FilterIdol-button boxShadow">+</button>
              </div>
            </div>

            <div className="FilterBox-statBoxContainer box">
              <div className="StatBox">
                <h4 className="StatBox-title subtitle">Rarity</h4>
                <div className="StatBox-items">
                  <div className="StatBox-imageContainer">
                    <img src="statbox-icon.png" alt="rarity" className="StatBox-image"/>
                  </div>
                </div>
              </div>
            </div>           

            <div className="FilterMenu-checkBoxContainer box">
              <div className="CheckBox">
                <label className="CheckBox-text">+ Worldwide only</label>
                <input type="checkbox" className="CheckBox-check"/>
              </div>
            </div>


            <button className="FilterBox-more button box">...more options</button>
            
            <div className="FilterBox-moreOptions box">

              <div className="FilterBox-chooseBoxContainer box">  
                <div className="ChooseBox">
                  <h4 className="ChooseBox-title subtitle">+ Promo Cards</h4>
                  <div className="ChooseBox-options box">
                    <span className="ChooseBox-option">All</span>
                    <span className="ChooseBox-option">Only</span>
                    <span className="ChooseBox-option">None</span>
                  </div>
                </div>          
              </div>


              <div className="FilterBox-selectBoxContainer box">
                <div className="SelectBox">
                  <h4 className="SelectBox-title subtitle">Skill</h4>
                  <select class="SelectBox-options box">
                    <option class="SelectBox-option">Score Up (217)</option>
                    <option class="SelectBox-option">Perfect Lock (167)</option>
                    <option class="SelectBox-option">Healer (134)</option>
                  </select>
                </div>
              </div>

              <div className="FilterBox-groupBoxContainer box">
                <div className="GroupBox">
                  <h4 className="GroupBox-title subtitle">Main Unit</h4>
                  <div className="GroupBox-groups box">
                    <img src="museIcon.png" alt="muse" className="GroupBox-group"/>
                    <img src="museIcon.png" alt="muse" className="GroupBox-group"/>
                    <img src="museIcon.png" alt="muse" className="GroupBox-group"/>
                  </div>
                </div>
              </div>

            </div>

          </div>


        </div>
      </div>
    </div>
  `
}

// - div.FilterMenu
    
  // - h3.FilterMenu-title
  //   - **SearchBox**

  // - h3.FilterMenu-title
  //   - **FilterBox**
    
  //   - h5.FilterMenu-subTitle
  //   - div.FilterIdol
  //     - button.FilterIdol-button
    
  //   - h5.FilterMenu-subTitle
  //   - **StatBox**
    
  //   - h5-FilterMenu-subTitle
  //   - **StatBox**
  //   - **CheckBox**
  //   - button.Button
    
  //   - h5.subTitle
  //   - **ChooseBox**

  //   - h5.subTitle
  //   - **ChooseBox**

  //   -  h5.subTitle
  //   - **ChooseBox**

  //   - h5.subTitle
  //   - **SelectBox**

  //   - h5.subTitle
  //   - **ChooseBox**

  //   - h5.subTitle
  //   - **SelectBox**
    
  //   - h5.subTitle
  //   - **ChooseBox**
  //   - 