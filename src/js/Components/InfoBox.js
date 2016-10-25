'use strict'

const yo = require('yo-yo')

let el = yo`
  <div class="InfoBox">
    <h2 class="InfoBox-title">School Idol Tomodachi</h2>
    <div class="InfoBox-infoContainer">
      <div class="InfoBox-info line">
        <p class="InfoBox-text">
          is crowdfunded by our Idol Devotees <a href="#" class="link">Nyaaaaa</a>, <a href="#" class="link">OtakuReborn</a>, our Idol Producer <a href="#" class="link">nicoahegao</a> and 141 idols-addicted donators 
        </p>
      </div>
      <div class="InfoBox-producers line">
        <a href="#" class="InfoBox-producer">
          <img src="producer.png" alt="Nyaaaaa" class="InfoBox-image">
        </a>
        <a href="#" class="InfoBox-producer">
          <img src="producer.png" alt="OtakuReborn" class="InfoBox-image">
        </a>
        <a href="#" class="InfoBox-producer">
          <img src="producer.png" alt="nicoahegao" class="InfoBox-image">
        </a>  
      </div>
    </div>              
  </div>     
`

module.exports = el