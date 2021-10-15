import React, { useState, useRef, useEffect, useContext } from 'react'
import { NewContext } from './context'


const Submenu = () => {

  const {showSubmenu, page, location} = useContext(NewContext);

  // useEffect(() => {
    
  // }, [page]);

  return (
    <aside className={showSubmenu ? "submenu show" : "submenu"}>
      <section>
        <h4>{page.page}</h4>
        <div className="submenu-center">
          {page.links.map((link, index) => {
            return <a key={index} href={link.url}>{link.icon}{link.label}</a>
          })}
        </div>
      </section>
    </aside>
  )
}

export default Submenu
