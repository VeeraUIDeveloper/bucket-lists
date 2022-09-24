import React, { useState } from "react";

import "./NewBucketForm.css";

const NewBucketForm = (props) => {
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredDate, setEnteredDate] = useState("");

  /// Another way to use 'useState'
  const [bucket, setBucket] = useState({
    title: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    setBucket((previousState) => {
      return {
        ...previousState,
        title: event.target.value,
      };
    });
  };

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    setBucket((previousState) => {
      return {
        ...previousState,
        date: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const bucketData = {
      title: bucket.title,
      date: new Date(bucket.date),
      id: Math.random().toString(),
    };

    props.finalBucketData(bucketData);
    // setEnteredTitle('');
    // setEnteredDate('');
    setBucket({
      title: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>Add new bucket</h1>
      <div className="new-bucket__control">
        <label>Title</label>
        <input
          type="text"
          value={bucket.title}
          onChange={titleChangeHandler}
        ></input>
      </div>
      <div className="new-bucket__control">
        <label>Date</label>
        <input
          type="date"
          value={bucket.date}
          onChange={dateChangeHandler}
        ></input>
      </div>
      <div className="new-bucket__actions">
      <button type="button" onClick={props.onCancel} className="cancel-button">Cancel</button>
      <button type="submit" className="submit-button">Add Bucket</button>
      </div>
    </form>
  );
};

export default NewBucketForm;
