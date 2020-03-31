import React, { useState } from "react";
//import Persons from "./components/Persons";

const App = props => {
  //persons in the phonebook
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  //for storing user submitted input
  const [newName, setNewName] = useState("");

  const [newNumber, setNewNumber] = useState("");

  // What is done as you type into input box
  const handleNewPerson = event => {
    setNewName(event.target.value);
    console.log(event.target.value);
  };

  const handleNewNumber = event => {
    setNewNumber(event.target.value);
    console.log(event.target.value);
  };

  //What is done onsubmit
  const addName = event => {
    event.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    };
    persons.filter(a => a.name === newName).length !== 0
      ? window.alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(personObject));

    setNewName("");
    setNewNumber("");
    console.log(persons);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name:
          <input value={newName} onChange={handleNewPerson} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      {/* <div>debugg: {newName}</div> */}
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, i) => (
          <li key={i}>
            {person.name}: {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
