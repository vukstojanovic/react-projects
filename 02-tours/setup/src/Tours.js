import React from 'react';
import Tour from './Tour';
const Tours = ({places, removePlace}) => {
  console.log(places);
  return (
    <>
    <h1 className="title">Our Tours</h1>
    <div>
      {places.map((p) => <Tour key={p.id} objectInfo={p} removePlace={removePlace}/>)}
    </div>
    </>
  );
};

export default Tours;
