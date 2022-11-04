import React from 'react'

function Navbar() {
  return (
    <nav className="nav">
      <a href="/home" className="site-title">BeneFi</a>
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

    </nav>
  )
}

export default Navbar