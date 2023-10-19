import "./Form.css";
import { useState } from "react";

const Form = (props) => {
  const [userInput, setUserInput] = useState({
    username: "",
    age: "",
  });

  const usernameHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, username: event.target.value };
    });
  };

  const ageHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, age: event.target.value };
    });
  };

  const resetForm = () => {
    setUserInput({
      username: "",
      age: "",
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!userInput.username || !userInput.age) return props.openModal();

    const person = {
      username: userInput.username,
      age: userInput.age,
    };

    props.updatePeople(person);

    resetForm();
  };

  return (
    <>
      <form>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          onChange={usernameHandler}
          value={userInput.username}
        />

        <label htmlFor="age">Age (Years)</label>
        <input type="number" onChange={ageHandler} value={userInput.age} />

        <button type="submit" onClick={submitHandler}>
          Add User
        </button>
      </form>
    </>
  );
};

export { Form };
