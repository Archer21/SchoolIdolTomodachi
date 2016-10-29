'use strict'

const yo = require('yo-yo')

let el = yo`
  <div class="Layout-signup">
    <div class="Signup">
      <h2 class="Signup-title">Sign Up</h2>

      <form action="" class="Signup-form form">
        <div class="Signup-inputContainer">
          <label class="labelBox">Username</label>
          <input type="text" class="Signup-username input" placeholder="Username"/>
        </div>
        
        <div class="Signup-inputContainer">
          <label class="labelBox">Email address</label>
          <input type="email" class="Signup-email input" placeholder="Email address"/>
        </div>

        <div class="Signup-inputContainer">        
          <label class="labelBox">Password</label>
          <input type="password" class="Signup-password input" placeholder="Password"/>
        </div>
      </form>

    </div>
  </div>
`

module.exports = el
