import React, { useEffect, useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [persons, setPersons] = useState(people);
  const [index, setIndex] = useState(1);

  function incrementIndex() {
    let i = index;
    i++;
    if (i >= persons.length) {
      i = 0;
    }
    setIndex(i);
  }

  function decrementIndex() {
    let i = index;
    i--;
    if (i < 0) {
      i = persons.length - 1;
    }
    setIndex(i);
  }

  function randomizeIndex() {
    let i = Math.floor(Math.random() * persons.length);

    if (index === i) {
      randomizeIndex();
    } else {
      setIndex(i);
    }
    
  }

  return (
    <main>
      <section className="container">
        <div className="container">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <article className="review">
          <img src={persons[index].image} alt=""/>
          <h4>{persons[index].name}</h4>
          <p>{persons[index].job}</p>
          <p>{persons[index].text}</p>
        </article>
        <button  onClick={decrementIndex}>Prev</button>
        <button  onClick={incrementIndex}>Next</button>
        <button  onClick={randomizeIndex}>Surprise me</button>
      </section>
    </main>
  );
};

export default Review;
