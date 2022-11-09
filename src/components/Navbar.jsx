import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ user }) {
  return (
    <nav className="nav">

      <a href="/" className="site-title">BeneFi</a>

      <div>
        {user.email.length > 0 &&
          <span>Welcome, {user.firstName}!</span>}
      </div>

      <Link to="/" className="site-title"><u>b.</u></Link>
      {user.email.length > 0 &&

        <li>
          <Link to="/request-send">Request/Send</Link>
        </li>
      
      {user.email.length > 0 &&
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      }
      {user.email.length > 0 &&
        <li>
          <Link to="/transactions">Transactions</Link>
        </li>
      }
      <li>
        <Link to="/About">About</Link>
      </li>
      <li>
        <Link to="/sign-in">Sign In</Link>
      </li>
      <li>
        <Link to="/sign-up">Sign Up</Link>
      </li>

    </nav>
  )
}

export default Navbar
