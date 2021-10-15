import React from 'react';
import Tour from './Tour';
<<<<<<< HEAD
const Tours = ({places, removePlace}) => {
  console.log(places);
  return (
    <>
    <h1 className="title">Our Tours</h1>
    <div>
      {places.map((p) => <Tour key={p.id} objectInfo={p} removePlace={removePlace}/>)}
    </div>
    </>
=======
const Tours = ({toursList}) => {
  return (
    {toursList}
>>>>>>> ed286138c322b73274162508b59fccc759548f49
  );
};

export default Tours;
