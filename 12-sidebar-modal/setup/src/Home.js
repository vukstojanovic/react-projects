import React from 'react'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext} from './context.js'

const Home = () => {

  // const {toggleSidebar, toggleModal} = useGlobalContext();

  return (
    <main>
      <button className="sidebar-toggle" onClick={() => "r"}>
        <FaBars/>
      </button>
      <button className="btn" onClick={() => "r"}>show modal</button>
    </main>
  )
}



export default Home
