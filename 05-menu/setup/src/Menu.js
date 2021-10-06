import React from 'react';

const Menu = ({current}) => {
  return (
    <div className="section-center">
      {current.map(item => {
        const {img, title, price, desc} = item;
        return (
          <article className="menu-item">
            <img src={img} alt="" className="photo"/>
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        )
      })}
    </div>
  );
};

export default Menu;
