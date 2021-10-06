import React from 'react';

const Categories = ({categories, displayCategory}) => {
  return (
    <div className="btn-container">
      {categories.map((c, index) => {
        return <button className="filter-btn" key={index} onClick={() => displayCategory(c)}>{c}</button>
      })}
    </div>
  );
};

export default Categories;
