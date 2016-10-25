'use strict'

const yo = require('yo-yo')

const InfoBox = require('./../../Components/InfoBox')
const PresentBox = require('./../../Components/PresentBox')
const Slider = require('./../../Components/Slider')
const CommentBox = require('./../../Components/CommentBox')

let el = yo`
  <div class="Layout-leftContent">
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

        <ul class="Menu">
          <li class="Menu-item"><a href="#" class="Menu-link">Following</a></li>
          <li class="Menu-item"><a href="#" class="Menu-link">Hot</a></li>
          <li class="Menu-item"><a href="#" class="Menu-link">New</a></li>
          <li class="Menu-item"><a href="#" class="Menu-link">All</a></li>
        </ul>

        <section class="Main-commentsContainer">
          ${CommentBox()} 
          ${CommentBox()} 
          ${CommentBox()} 
          ${CommentBox()} 
          ${CommentBox()}
        </section> 
      </section>
    </section>
  </div>
`

module.exports = el