import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {

  const [name, setName] = useState("");
  const [groceries, setGroceries] = useState([]);
  const [alerted, setAlerted] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (isEdit) {
      setGroceries(...groceries);
    }

    if (name) {
      setGroceries([...groceries, name]);
      setAlerted(true);
    }

    setName("");
  }

  function deleteItem(i) {
    const newList = [...groceries];
    newList.splice(i, 1);
    setGroceries(newList);
  }

  function editItem(i) {
    setIsEdit(true);
    const newList = groceries;
    setName(newList[i]);
  }

  function clearList() {
    setGroceries([]);
  }

  useEffect(() => {
    const ticking = setTimeout(() => {
      setAlerted(false);
    }, 2000)
    return () => {
      clearTimeout(ticking);
    }
  }, [groceries]);

  // console.log(groceries);

  return (
    <section className="section-center">
      <form action="" className="grocery-form" onSubmit={handleSubmit}>
        { alerted ? <Alert /> : null }
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" className="grocery" placeholder="e. g. eggs" value={name} onChange={(e) => setName(e.target.value)} />
          <button className="submit-btn">submit</button>
        </div>
      </form>
      <List groceries={groceries} deleteItem={deleteItem} clearList={clearList} editItem={editItem} />
    </section>
  )
}

export default App
