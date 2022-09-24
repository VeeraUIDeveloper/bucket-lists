import React, { useState } from "react";

import BucketLists from "./BucketLists";
import BucketListFilter from "./BucketListFilter";
import "./Buckets.css";

const Buckets = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const applyFilterYear = (year) => {
    setSelectedYear(year);
  };

  const filteredBucketList = props.items.filter((bucket) => {
    return bucket.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div className="buckets">
      <BucketListFilter selected={selectedYear} applyFilter={applyFilterYear} />
      <BucketLists items={filteredBucketList} />
    </div>
  );
};

export default Buckets;
