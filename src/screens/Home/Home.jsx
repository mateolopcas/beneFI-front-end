import React from 'react'
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="home">
      <h1 className="home-text">Welcome to BeneFi, eTransactions made easy</h1>
      <Link to="/sign-up">
        <button className="signUp-btn"> Sign up </button>
      </Link>


    </div>
  )
}

export default Home