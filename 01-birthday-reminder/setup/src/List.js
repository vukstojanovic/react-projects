import React from 'react';

const List = ({list}) => {
  return (
    <>
      {list.map(item => {
        return (
          <article key={item.id} className="person">
            <img src={item.image} alt=""/>
            <div>
              <h4>{item.name}</h4>
              <p>{item.age} years</p>
            </div>
          </article>
        )
      })}
    </>
  );
};

export default List;
