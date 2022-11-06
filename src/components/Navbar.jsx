import React from 'react'

function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">BeneFi</a>
      <li>
        <a href="/request-send">Request/Send</a>
      </li>
      <li>
        <a href="/profile">Profile</a>
      </li>
      <li>
        <a href="/transactions">Transactions</a>
      </li>
      <li>
        <a href="/About">About</a>
      </li>
      <li>
        <a href="/sign-in">Sign In</a>
      </li>
      <li>
        <a href="/sign-up">Sign Up</a>
      </li>

    </nav>
  )
}

export default Navbar