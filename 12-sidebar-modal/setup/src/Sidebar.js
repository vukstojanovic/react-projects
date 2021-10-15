import React from 'react'
import logo from './logo.svg'
import { useGlobalContext } from './context'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'

const Sidebar = () => {

  // const {showSidebar} = useGlobalContext();

  console.log(useGlobalContext());

  return (
    <aside className={ "r" ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img src={logo} alt=""/>
        <button className="close-btn">
          <FaTimes/>
        </button>
      </div>
      <ul className="links">
        {links.map(link => {
          return <li key={link.id}><a href={link.url}>{link.icon}{link.text}</a></li>
        })}
      </ul>
      <ul className="social-icons">
        {social.map(soc => {
          return <li key={soc.id}><a href={soc.url}>{soc.icon}</a></li>
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
