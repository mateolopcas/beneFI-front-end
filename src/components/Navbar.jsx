import React from 'react'

function Navbar({user}) {
  return (
    <nav className="nav">
      <a href="/" className="site-title">BeneFi</a>
      
      <div>
        {user.email.length > 0 &&
          <span>Welcome, {user.firstName}!</span> }
      </div>
      <li>
        <a href="/request-send">Request/Send</a>
      </li>
      
      { user.email.length > 0 &&
      <li>
        <a href="/profile">Profile</a>
      </li>
      }
      { user.email.length > 0 &&
      <li>
        <a href="/transactions">Transactions</a>
      </li>
      }
      <li>
        <a href="/About">About</a>
      </li>
      <li>
        <a href="/sign-in">Login</a>
      </li>
      <li>
        <a href="/sign-up">Sign Up</a>
      </li>

    </nav>
  )
}

export default Navbar
