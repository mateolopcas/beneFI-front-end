import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({user}) {
  return (
    <nav className="nav">
      <Link to="/" className="site-title"><u>b.</u></Link>
      { user.email.length > 0 &&
      <li>
        <Link to="/request-send">Send &nbsp;/&nbsp; Request</Link>
      </li>
      }
      { user.email.length > 0 &&
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      }
      { user.email.length > 0 &&
      <li>
        <Link to="/transactions">Transactions</Link>
      </li>
      }
      <li>
        <Link to="/About">About</Link>
      </li>
      <li>
        <Link to="/sign-in">Login</Link>
      </li>
      <li>
        <Link to="/sign-up">Sign Up</Link>
      </li>

    </nav>
  )
}

export default Navbar
