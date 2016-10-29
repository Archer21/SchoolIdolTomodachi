'use strict'

const yo = require('yo-yo')

let el = yo`
  <div class="Layout-signin">
    <div class="Signin">
      <h2 class="Signin-title">Sign In</h2>

      <form action="" class="Signin-form form">
        <div class="Signin-inputContainer">
          <label class="labelBox">Username</label>
          <input type="text" class="Signin-username input" placeholder="Username"/>
        </div>

        <div class="Signin-inputContainer">        
          <label class="labelBox">Password</label>
          <input type="password" class="Signin-password input" placeholder="Password"/>
        </div>
      </form>

    </div>
  </div>
`

module.exports = el