import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const uniqueCategories = items.map(i => i.category).filter((c, index, array) => array.indexOf(c) == index);
  const [categories, setCategories] = useState(["all", ...uniqueCategories]);
  const [current, setCurrent] = useState(items);
  
  function displayCategory(c) {
    let category;
    if (c === "all") {
      category = items;
    } else {
      category = items.filter(item => item.category === c);
    }
    
    setCurrent(category);
  }

  return (
    <section className="menu section">
          <Categories categories={categories} displayCategory={displayCategory} />
          <Menu current = {current}/>
    </section>
  );
}

export default App;
