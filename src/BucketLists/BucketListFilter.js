import React from "react";

import "./BucketListFilter.css";

const BucketListFilter = (props) => {
  
  const filterChangeHandler = (event) => {
    props.applyFilter(event.target.value);
  };

  return (
    <div className="filter-control">
      <label className="filter__label">Short by</label>
      <select value={props.selected} onChange={filterChangeHandler} className="filter__dropdown">
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
};

export default BucketListFilter;
