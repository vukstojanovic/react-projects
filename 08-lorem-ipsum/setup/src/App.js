import React, { useState } from 'react';
import data from './data';
function App() {
  
  const [number, setNumber] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);

  function displayParagraphs(e) {
    e.preventDefault();
    if (number <= 0) {
      setParagraphs(data.slice(0, 1));
    } else if (number > 8) {
      setParagraphs(data.slice(0, 8));
    } else {
      setParagraphs(data.slice(0, number));
    }
  }
  
  return (
    <>
    <h2>Tired of boring lorm ipsum?</h2>
    <form action="" onSubmit={displayParagraphs}>
      <label htmlFor="paragraphs">Paragraphs: </label>
      <input type="number" name="paragraphs" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button>Generate</button>
    </form>
    {paragraphs.map((p, index) => {
      return <p key={index}>{p}</p>;
    })}
    </>
    )
}

export default App;
