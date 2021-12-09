import React from "react";

const Categories = ({ item, filter }) => {
  return (
    <button onClick={() => filter(item)} className="filter-btn">
      {item}
    </button>
  );
};

export default Categories;
