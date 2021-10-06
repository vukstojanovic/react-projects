import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
function App() {
<<<<<<< HEAD

  const [places, setPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function removePlace(id) {
    const newPlaces = places.filter((place) => place.id !== id)
    setPlaces(newPlaces)
  }

  async function fetchData() {
    setIsLoading(true);
    try {
      let data = await fetch(url);
      let result = await data.json();
      setIsLoading(false);
      setPlaces(result);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
    console.log(places);
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading/>
      </main>
    )
  }

  if (places.length === 0) {
    return (
      <main>
        <div className='title'>
          <h1>No tours left</h1>
          <button className="btn" onClick={() => fetchData()}>Refresh</button>
        </div>
      </main>
    );
=======
  
  async function fetchData(link) {
    const data = await fetch(link);
    const result = await data.json();
    return result;
>>>>>>> ed286138c322b73274162508b59fccc759548f49
  }

  return (
    <main>
<<<<<<< HEAD
      <Tours places={places} removePlace={removePlace}/>
=======
      <h2>Our Tours</h2>
      <Tours toursList={fetchData(url)} />
>>>>>>> ed286138c322b73274162508b59fccc759548f49
    </main>
  )
}

export default App
