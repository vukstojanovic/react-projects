import React, { useContext } from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import {NewContext} from './context'

const Navbar = () => {

  const {showSidebar, setShowSidebar} = useContext(NewContext);

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
            <button className="link-btn">Products</button>
          </li>
          <li>
            <button className="link-btn">Developers</button>
          </li>
          <li>
            <button className="link-btn">Company</button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
