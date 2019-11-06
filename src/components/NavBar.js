import React from 'react'
import {Link} from 'react-router-dom';
const NavBar = () => {
  return (
    <header>
      <img className="header__logo" src="../../public/img/logo.png" alt="site logo" />
      <div className="header__navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/chart">Chart</Link>
        <Link to="/investor">Investor</Link>
        <Link to="/support">Support</Link>
      </div>
      <div className="header__loginarea">
        <Link to="/login" className="loginBtn">Login</Link>
        <Link to="/signup" className="signupBtn">Sign up</Link>
      </div>
    </header>
  )
}

export default NavBar
