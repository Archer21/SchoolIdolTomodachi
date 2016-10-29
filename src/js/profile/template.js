'use strict'

const yo = require('yo-yo')

const layout = require('./../layout')



module.exports = function Profile (username) {
  let el = yo`
    <div>
      Hola ${username}
    </div>
  `
  
  return yo`
    ${layout(el)}
  `
}
