import React, {useContext} from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import {NewContext} from './context'

const Sidebar = () => {

  const {showSidebar, setShowSidebar} = useContext(NewContext);

  return (
    <div className={showSidebar ? "sidebar-wrapper show" : "sidebar-wrapper"}>
      <aside className="sidebar">
        <button className="close-btn" onClick={() => setShowSidebar(false)}>
          <FaTimes></FaTimes>
        </button>
        <div className="sidebar-links">
          {sublinks.map((item, index) => {
            return (
              <article key={index}>
                <h4>{item.page}</h4>
                {item.links.map((i, num) => {
                  return (
                    <div className="sidebar-sublinks" key={num}>
                      <a href={i.url}>
                        {i.icon}
                        {i.label}
                      </a>
                    </div>
                  )
                })}
              </article>
            )
          })}
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
