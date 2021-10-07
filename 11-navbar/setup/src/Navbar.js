import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {

  console.log(social);
  const [burgerActive, setBurgerActive] = useState(false);

  function toggleBurger() {
    setBurgerActive(prevValue => !prevValue);
  }

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="" className="logo"/>
          <button className="nav-toggle"onClick={toggleBurger}>
            <FaBars/>
          </button>
        </div>
        <div className="links-container" style={burgerActive ? {height: "200px"} : {height: "0px"}}>
          <ul className="links">
            {links.map(link => {
              const {id, url, text} = link;
              return <li key={id}><a href={url}>{text}</a></li>
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map(s => {
              const {id, url, icon} = s;
              return <li key={id}><a href={url}>{icon}</a></li>
            })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
