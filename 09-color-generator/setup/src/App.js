import React, { useEffect, useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
<<<<<<< HEAD
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))

    return () => {
      window.removeEventListener("resize", () => setWindowWidth(window.innerWidth))
    }
  }, []);

  return <h2>{windowWidth}</h2>

=======

  console.log(new Values("#4456de").all(10));

  const [color, setColor] = useState("#4456de");
  const [values, setValues] = useState(new Values("#f15025").all(10));
  const [error, setError] = useState(false);

  function changeColor(e) {
    e.preventDefault();
    setError(false);
    try {
      setValues(new Values(color).all(10));
    } catch (error) {
      console.log(error);
      setError(true);
    } 
  }

  return (
    <>
    <section className="container">
      <h3>Color generator</h3>
      <form action="" onSubmit={changeColor} >
        <input type="text"  placeholder="#f15025" value={color} className={error ? "error" : ""} onChange={(e) => setColor(e.target.value)}/>
        <button className="btn" type="submit">Submit</button>
      </form>
    </section>
    <section className="colors">
      {values.map((value, index) => {
        const {rgb, weight} = value;
        return <SingleColor key={index} rgb={rgb} weight={weight} index={index}/>
      })}
    </section>
    </>
  )
>>>>>>> ed286138c322b73274162508b59fccc759548f49
}

export default App
