import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {

  const [name, setName] = useState("");
  const [groceries, setGroceries] = useState([]);
  const [alerted, setAlerted] = useState({show: false, message: "", type: ""});
  const [isEdit, setIsEdit] = useState(false);
  const [itemID, setItemID] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (isEdit && name) {
      setGroceries(groceries.map((item, index) => {
        if (index === itemID) {
          return name;
        }
        return item;
      }));
      setAlerted({show: true, message: "Item edited", type: "success"});
      setIsEdit(false);
    } else if (name) {
      setGroceries([...groceries, name]);
      setAlerted({show: true, message: "Item added", type: "success"});
    }

    setName("");
  }

  function deleteItem(i) {
    const newList = [...groceries];
    newList.splice(i, 1);
    setGroceries(newList);
    setAlerted({show: true, message: "Item deleted", type: "danger"});
  }

  function editItem(i) {
    setIsEdit(true);
    setItemID(i);
    setName(groceries[i]);
  }

  function clearList() {
    setGroceries([]);
    setAlerted({show: true, message: "List deleted", type: "danger"});
  }

  function hideAlert() {
    setAlerted({show: false, message: "", type: ""});
  }

  // console.log(groceries);

  return (
    <section className="section-center">
      <form action="" className="grocery-form" onSubmit={handleSubmit}>
        { alerted.show && <Alert hideAlert={hideAlert} {...alerted} groceries={groceries} /> }
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" className="grocery" placeholder="e. g. eggs" value={name} onChange={(e) => setName(e.target.value)} />
          <button className="submit-btn">{isEdit ? "Edit": "Submit"}</button>
        </div>
      </form>
      <List groceries={groceries} deleteItem={deleteItem} clearList={clearList} editItem={editItem} />
    </section>
  )
}

export default App
