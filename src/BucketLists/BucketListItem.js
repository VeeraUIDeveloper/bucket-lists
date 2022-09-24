import React from "react";

import "./BucketListItem.css";

const BucketListItem = (props) => {
  const month = props.date.toLocaleString("en-IN", { month: "long" });
  const day = props.date.toLocaleString("en-IN", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <li className="bucket-lists__item">
      <input type="checkbox" />
      <div className="bucket-lists__title">
        <p>{props.title}</p>
        <small className="bucket-lists__date">
          {day}-{month}-{year}
        </small>
      </div>
    </li>
  );
};

export default BucketListItem;
