import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({user, setUser}) {
  let logout = () => {
    setUser({
      _id: "",
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      avatarImg: "",
      transactions: []
    })
  }
  return (
    <nav className="nav">
      <Link to="/" className="site-title"><u>b.</u></Link>
      { user.email.length > 0 &&
      <li>
        <Link to="/request-send">Request/Send</Link>
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
      { user.email.length === 0 &&
      <li>
        <Link to="/sign-in">Log In</Link>
      </li>
      }
      { user.email.length === 0 &&
      <li>
        <Link to="/sign-up">Sign Up</Link>
      </li>
      }
      { user.email.length > 0 &&
      <li>
        <Link onClick={logout} to="/">Logout</Link>
      </li>
      }

    </nav>
  )
}

export default Navbar
