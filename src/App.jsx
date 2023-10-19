import { useState } from "react";
import { Form } from "./components/Form/Form";
import { People } from "./components/People/People";
import { ErrorModal } from "./components/ErrorModal/ErrorModal";

function App() {
  const [peopleList, setPeopleList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const savePeopleList = (person) => {
    setPeopleList((prevState) => [
      ...prevState, // Spread the previous state
      { username: person.username, age: person.age },
    ]);
  };

  const modalOpen = () => {
    setIsModalOpen(true);
  };

  const modalClose = (modalClosed) => {
    setIsModalOpen(false);
  };

  console.log(isModalOpen);

  return (
    <>
      <Form updatePeople={savePeopleList} openModal={modalOpen} />
      <People people={peopleList} />
      {isModalOpen ? <ErrorModal closeModal={modalClose} /> : null}
    </>
  );
}

export default App;
