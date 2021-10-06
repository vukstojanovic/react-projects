import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {

  const [plus, setPlus] = useState(true);

  return (
      <>
        <section class="info">
          <article class="question">
            <header>
              <h4>{title}</h4>
              <button class="btn" onClick={() => setPlus(!plus)}>{plus ? <AiOutlinePlus/> : <AiOutlineMinus/>}</button>
            </header>
            <p>{plus ? "" : info}</p>
          </article>
        </section>
      </>
  );
};

export default Question;
