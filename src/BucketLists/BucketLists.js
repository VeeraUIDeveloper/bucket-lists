import React from "react";

import BucketListItem from "./BucketListItem";
import "./BucketLists.css";

const BucketLists = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="bucket-lists__empty">
        <p>No records found!</p>
      </div>
    );
  }

  return (
    <ul className="bucket-lists">
      {props.items.map((bucket) => (
        <BucketListItem
          key={bucket.id}
          title={bucket.title}
          date={bucket.date}
        />
      ))}
    </ul>
  );
};

export default BucketLists;
