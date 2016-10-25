'use strict'

const yo = require('yo-yo')
const empty = require('empty-element') 

const Logo = require('./../Components/Logo')
const Navigation = require('./../Components/Navigation')

module.exports = function Header (ctx, next) {
  var el = yo`
    <header id="header-container" class="Header">
      
      ${Logo}

      <div class="Container-navigationContainer">
        ${Navigation}
      </div>  
    </header>
  `

  var header = document.getElementById('header-container')
  empty(header).appendChild(el)
  next()
}
