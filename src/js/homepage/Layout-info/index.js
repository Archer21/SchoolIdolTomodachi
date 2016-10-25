'use strict'

const yo = require('yo-yo')

const InfoBox = require('./../../Components/InfoBox')
const PresentBox = require('./../../Components/PresentBox')
const Slider = require('./../../Components/Slider')
const CommentBox = require('./../../Components/CommentBox')

let el = yo`
  <div className="Layout-leftContent">
    <div class="Layout-info">
            
      <div class="Layout-infoBoxContainer">            
        ${InfoBox}
      </div> 

      <div class="Layout-presentBoxContainer">
        ${PresentBox}
      </div>
      
    </div>

    <div id="slider-container" class="Layout-sliderContainer">
      ${Slider}
    </div>

    <section id="main-content" class="Layout-mainContainer">
      <section class="Main">
        ${CommentBox()} 
        ${CommentBox()} 
        ${CommentBox()} 
        ${CommentBox()} 
        ${CommentBox()} 
      </section>
    </section>
  </div>
`

module.exports = el