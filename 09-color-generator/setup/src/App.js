import React, { useEffect, useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))

    return () => {
      window.removeEventListener("resize", () => setWindowWidth(window.innerWidth))
    }
  }, []);

  return <h2>{windowWidth}</h2>

}

export default App
