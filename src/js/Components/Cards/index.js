'use strict'

const yo = require('yo-yo')

const IdolCard = require('./../IdolCard')

module.exports = function Cards () {
  return yo`
    <section className="Cards">
      
        <article class="Cards-idolContainer">
          ${IdolCard()}
        </article>

        <article class="Cards-idolContainer">
          ${IdolCard()}
        </article>

        <article class="Cards-idolContainer">
          ${IdolCard()}
        </article>

        <article class="Cards-idolContainer">
          ${IdolCard()}
        </article>

        <article class="Cards-idolContainer">
          ${IdolCard()}
        </article>

        <article class="Cards-idolContainer">
          ${IdolCard()}
        </article>

        

      </section>
  `
}