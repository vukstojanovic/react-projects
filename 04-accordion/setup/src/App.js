import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {

  return (
    <main>
      <div class="container">
      <h3>questions and answers about login</h3>
      <section class="info">
        {data.map(item => {
          const {id, title, info} = item;
          return <SingleQuestion key={id} title={title} info={info}/>
        })}
      </section>
      </div>
    </main>
  );
}

export default App;
