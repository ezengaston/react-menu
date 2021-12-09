import React from "react";

const Menu = ({ menuItems }) => {
  return (
    <article className="menu-item">
      <img className="photo" src={menuItems.img} alt={menuItems.title}></img>
      <div className="item-info">
        <header>
          <h4>{menuItems.title}</h4>
          <h4 className="price">{menuItems.price}</h4>
        </header>
        <p className="item-text">{menuItems.desc}</p>
      </div>
    </article>
  );
};

export default Menu;
