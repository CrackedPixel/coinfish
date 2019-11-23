import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import LogoPic from '../img/logo.png';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';




const NavBar = () => {
  const [barOpen, setBarOpen] = useState(0);
  const toggleMenu = (isDisabled) => {
    if (isDisabled) return;
    let newToggleVal; 
      switch(barOpen){
        case 0: newToggleVal = 1; break;
        case 2: newToggleVal = 3; break;
        case 1: return;
        default: return;
    }
    setBarOpen(newToggleVal);
    setTimeout(() => {
      setBarOpen(() => {
        return (newToggleVal === 1) ? 2 : 0
      })
    }, 950)
    console.log("Setting bar to", newToggleVal);
  }

  const CloseMenuURL = () => {
    toggleMenu(false);
  }
  
  const menuClassName = () => {
    switch (barOpen){
      case 0: case 3: return "header__menubtn__toggle hidden";
      case 1: case 2: return "header__menubtn__toggle";
      default: {
        console.log(barOpen);
        return "";
      }
    }
  }
  // (barOpen === 0 || barOpen === 3) ? "header__menubtn__toggle" : "header__menubtn__toggle hidden"
  const menuItems = [
    {title: "Home", to: "/"},
    {title: "About", to: "/about"},
    {title: "Chart", to: "/chart"}
  ]
  const loginItems = [
    {title: "Login", to: "/login", cn: "loginBtn"},
    {title: "Sign up", to: "/signup", cn: "signupBtn"}
  ]

  return (
    <header>
      <div className={menuClassName()}>
        <ChevronLeftIcon className="_closeMenu" onClick={() => toggleMenu(barOpen === 0)}/>
        {
          menuItems.map((item, i) => {
          return <Link onClick={CloseMenuURL} key={i} to={item.to}>{item.title}</Link>
          })
        }
        <hr />
        {
          loginItems.map((item, i) => {
          return <Link onClick={CloseMenuURL} key={i} to={item.to} className={item.cn}>{item.title}</Link>
          })
        }
      </div>
      {<MenuIcon className="_openMenu" onClick={() => toggleMenu(barOpen > 0)}/>}
      <Link to="/" className="header__logo__container">
        <img className="header__logo" src={LogoPic} alt="site logo" />
        <span>CoinFish</span>
      </Link>
      <div className="header__navigation">
        {
          menuItems.map((item, i) => {
          return <Link key={i} to={item.to}>{item.title}</Link>
          })
        }
      </div>
      <div className="header__loginarea">
        {
          loginItems.map((item, i) => {
          return <Link key={i} to={item.to} className={item.cn}>{item.title}</Link>
          })
        }
      </div>
    </header>
  )
}

export default NavBar
