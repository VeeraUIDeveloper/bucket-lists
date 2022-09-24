import React, { useState } from "react";

import NewBucketForm from "./NewBucketForm";
import "./NewBucket.css";

const NewBucket = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  const addFinalBucketData = (bucketData) => {
    props.addBucket(bucketData);
    setIsEditing(false);
  };

  const addNewClickHandler = () => {
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };
  
  return (
    <div className="new-bucket">
      {!isEditing && <button type="button" onClick={addNewClickHandler} className="add-new-button">Add new</button>}
      {isEditing && <NewBucketForm finalBucketData={addFinalBucketData} onCancel={stopEditing} />}
    </div>
  );
};

export default NewBucket;
