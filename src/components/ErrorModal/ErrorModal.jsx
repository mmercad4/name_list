import { useState } from "react";
import "./ErrorModal.css";

const ErrorModal = (props) => {
  const modalCloseHandler = () => {
    props.closeModal(false);
  };

  console.log(props);

  return (
    <div className="overlay">
      <div className="errorModal">
        <h1>Invalid Input</h1>
        <p>Please enter a valid name and age (non-empty values).</p>
        <button onClick={modalCloseHandler}>Okay</button>
      </div>
    </div>
  );
};

export { ErrorModal };
