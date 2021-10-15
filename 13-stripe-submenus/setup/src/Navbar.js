import React, { useContext } from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import {NewContext} from './context'

const Navbar = () => {

  const {showSidebar, setShowSidebar} = useContext(NewContext);
  const {openSubmenu, closeSubmenu} = useContext(NewContext);
  function displaySubmenu(e) {
    const text = e.target.textContent;
    const currentLink = e.target.getBoundingClientRect();
    const center = (currentLink.left + currentLink.right) / 2;
    const bottom = currentLink.bottom - 3;
    console.log(currentLink);
    openSubmenu(text, {center, bottom});
  }

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt=""/>
          <button className="btn toggle-btn" onClick={() => setShowSidebar(true)}>
            <FaBars/>
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>products</button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>developers</button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>company</button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
