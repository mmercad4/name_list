import { useState } from "react";
import "./People.css";

const People = (props) => {
  console.log(props.people);
  const listPeople = props.people.map((person) => {
    return (
      <div className="person">
        <h2>{person.username}</h2>
        <h2>{person.age}</h2>
      </div>
    );
  });

  return (
    <div className="people">
      <div className="heading">
        <h1>Person</h1>
        <h1>Age</h1>
      </div>
      {listPeople}
    </div>
  );
};

export { People };
