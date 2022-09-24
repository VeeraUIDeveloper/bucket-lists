import React, { useState } from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import NewBucket from "./NewBucket/NewBucket";
import Buckets from "./BucketLists/Buckets";

const DUMMY_BUCKETS = [
  {
    id: 1,
    title: "Job Interview",
    date: new Date(2022, 9, 14),
  },
  {
    id: 2,
    title: "House loan",
    date: new Date(2022, 10, 15),
  },
  {
    id: 3,
    title: "Stock market trading",
    date: new Date(2021, 8, 10),
  },
];

function App() {
  const [buckets, setBucketList] = useState(DUMMY_BUCKETS);

  const addBucketHandler = (bucketData) => {
    setBucketList((previousState) => {
      return [bucketData, ...previousState];
    });
  };

  return (
    <>
      <Header />
      <NewBucket addBucket={addBucketHandler} />
      <Buckets items={buckets} />
      <Footer />
    </>
  );
}

export default App;
