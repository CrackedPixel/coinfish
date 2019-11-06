import React from 'react'
import {Link} from 'react-router-dom';
import LogoPic from '../img/logo.png';
const NavBar = () => {
  return (
    <header>
      <Link to="/" className="header__logo__container">
        <img className="header__logo" src={LogoPic} alt="site logo" />
        <span>CoinFish</span>
      </Link>
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
