'use strict'

const yo = require('yo-yo')

const Banner = require('./../../Components/Banner')

let el = yo`
  <div class="Layout-cards">
    
    <div class="Layout-bannerContainer">
      ${Banner}
    </div>

    <div class="Layout-cardsContainer">
      <p class="Cards-match">57 cards match your search:</p>
      <section className="Cards">
        <article class="Cards-idolContainer">
          <section class="IdolCard">
            <a href="#" class="IdolCard-body">
              
              <div class="IdolCard-unidolized">
                <img src="unidolizedCard.png" alt="unidolized" class="IdolCard-image"/>
              </div>

              <div class="IdolCard-idolized">
                <img src="idolizedCard.png" alt="idolized" class="IdolCard-image"/>
              </div>

            </a>
          </section>
        </article>

        <article class="Cards-idolContainer">
          <section class="IdolCard">
            <a href="#" class="IdolCard-body">
              
              <div class="IdolCard-unidolized">
                <img src="unidolizedCard.png" alt="unidolized" class="IdolCard-image"/>
              </div>

              <div class="IdolCard-idolized">
                <img src="idolizedCard.png" alt="idolized" class="IdolCard-image"/>
              </div>

            </a>
          </section>
        </article>

        <article class="Cards-idolContainer">
          <section class="IdolCard">
            <a href="#" class="IdolCard-body">
              
              <div class="IdolCard-unidolized">
                <img src="unidolizedCard.png" alt="unidolized" class="IdolCard-image"/>
              </div>

              <div class="IdolCard-idolized">
                <img src="idolizedCard.png" alt="idolized" class="IdolCard-image"/>
              </div>

            </a>
          </section>
        </article>

        <article class="Cards-idolContainer">
          <section class="IdolCard">
            <a href="#" class="IdolCard-body">
              
              <div class="IdolCard-unidolized">
                <img src="unidolizedCard.png" alt="unidolized" class="IdolCard-image"/>
              </div>

              <div class="IdolCard-idolized">
                <img src="idolizedCard.png" alt="idolized" class="IdolCard-image"/>
              </div>

            </a>
          </section>
        </article>
      </section>
    </div>
  </div>
`

module.exports = el

// - section.IdolCard
//   - a.IdolCard-body
//     - div.IdolCard-unidolized
//       - img.IdolCard-image
//     - div.IdolCard-idolized
//       - img.IdolCard-image
