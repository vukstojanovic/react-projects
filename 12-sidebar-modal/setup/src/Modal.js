import React from 'react'
import { FaTimes } from 'react-icons/fa'
import {useGlobalContext} from './context.js'

const Modal = () => {

  // const {showModal} = useGlobalContext();

  return (
    <div className={ "r" ? "modal-overlay" : "modal-overlay show-modal"}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn">
            <FaTimes/>
        </button>
      </div>
    </div>
  )
}

export default Modal
