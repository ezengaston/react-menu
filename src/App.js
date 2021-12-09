import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const unique = new Set(items.map((item) => item.category));
  const uniqueArray = ["all", ...unique];

  const [menu, setMenu] = useState(items);

  function filter(name) {
    if (name === "all") return setMenu(items);
    const newMenu = items.filter((item) => item.category === name);
    setMenu(newMenu);
  }

  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          {uniqueArray.map((item) => (
            <Categories key={item} item={item} filter={filter} />
          ))}
        </div>
        <div className="section-center">
          {menu.map((menuItems) => (
            <Menu key={menuItems.id} menuItems={menuItems} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
