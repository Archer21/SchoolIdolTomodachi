'use strict'

const yo = require('yo-yo')

let el = yo`
  <div className="Layout-signup">
    <div className="Signup">
      <h2 className="Signup-title">Sign Up</h2>

      <form action="" className="Signup-form form">
        <div className="Signup-inputContainer">
          <label className="labelBox">Username</label>
          <input type="text" className="Signup-username input" placeholder="Username"/>
        </div>
        
        <div className="Signup-inputContainer">
          <label className="labelBox">Email address</label>
          <input type="email" className="Signup-email input" placeholder="Email address"/>
        </div>

        <div className="Signup-inputContainer">        
          <label className="labelBox">Password</label>
          <input type="password" className="Signup-password input" placeholder="Password"/>
        </div>
      </form>

    </div>
  </div>
`

module.exports = el