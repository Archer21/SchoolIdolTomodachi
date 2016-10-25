'use strict'

const yo = require('yo-yo')

module.exports = function renderLayout (leftContent) {
  return yo`
    <section  class="Layout">
      <section class="Layout-left">

        ${leftContent}
        
      </section>
    </section>
  `
}
