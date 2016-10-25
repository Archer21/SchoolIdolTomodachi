'use strict'

const yo = require('yo-yo')

module.exports = function renderLayout (content) {
  return yo`
    <section  class="Layout">
      <section class="Layout-left">

        ${content}
        
      </section>
    </section>
  `
}
