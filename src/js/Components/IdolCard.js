'use strict'

const yo = require('yo-yo')

module.exports = function renderCard () {
  return yo`
    <section class="IdolCard">
      <a href="#" class="IdolCard-body">
        
        <div class="IdolCard-unidolized">
          <img src="unidolizedCard.png" alt="unidolized" class="IdolCard-image"/>
        </div>

        <div class="IdolCard-idolized">
          <img src="idolizedCard.png" alt="idolized" class="IdolCard-image"/>
        </div>

      </a>

      <footer class="IdolCard-footer">
        <a href="#" class="IdolCard-addCard buttonBox">+</a>
        <div class="IdolCard-info buttonBox">
          <a href="#" class="IdolCard-type">µ</a>
          <a href="#" class="IdolCard-avaible">∆</a>
        </div>
      </footer>
    </section>
  `
}
