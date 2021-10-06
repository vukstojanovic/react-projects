import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  const [list, setList] = useState(data);

  return (
    <main>
    <div className="container">
      <h3>{list.length} birthdays today</h3>
      <List list={list}/>
      <button onClick={() => setList([])}>Clear All</button>
    </div>
    </main>
  )
}

export default App;
