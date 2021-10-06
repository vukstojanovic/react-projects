import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  
  async function fetchData(link) {
    const data = await fetch(link);
    const result = await data.json();
    return result;
  }

  return (
    <main>
      <h2>Our Tours</h2>
      <Tours toursList={fetchData(url)} />
    </main>
  )
}

export default App
