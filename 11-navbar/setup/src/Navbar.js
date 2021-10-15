import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {

  const [burgerActive, setBurgerActive] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  function toggleBurger() {
    setBurgerActive(prevValue => !prevValue);
  }

  useEffect(() => {
    console.log(linksRef.current.getBoundingClientRect().height);
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (burgerActive) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [burgerActive]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="" className="logo"/>
          <button className="nav-toggle" onClick={toggleBurger}>
            <FaBars/>
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
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
