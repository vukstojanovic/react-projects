import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({groceries, deleteItem, clearList, editItem}) => {

  return (
    <div className="grocery-container">
      <div className="grocery-list">
        {groceries.map((item, index) => {
          return (
            <article key={index} className="grocery-item">
              <p className="title">{item}</p>
              <div className="btn-container">
                <button className="edit-btn" onClick={() => editItem(index)}>
                  <FaEdit></FaEdit>
                </button>
                <button className="delete-btn" onClick={() => deleteItem(index)}>
                  <FaTrash></FaTrash>
                </button>
              </div>
            </article>
          )
        })}
      </div>
      <button className="clear-btn" onClick={() => clearList()}>clear items</button>
    </div>
  )
}

export default List
