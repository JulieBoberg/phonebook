import React, { useState, useEffect } from "react";
import axios from "axios";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import AddForm from "./components/AddForm";

const App = props => {
  //persons in the phonebook
  const [persons, setPersons] = useState([]);
  //for storing user submitted input
  const [newName, setNewName] = useState("");

  const [newNumber, setNewNumber] = useState("");

  const [newFilter, setNewFilter] = useState("");

  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then(response => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

  const peopleToShow = showAll
    ? persons
    : persons.filter(person =>
        person.name.toLowerCase().includes(newFilter.toLowerCase())
      );

  const handleFilter = event => {
    setNewFilter(event.target.value);
    setShowAll(false);
  };

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

      <Filter newFilter={newFilter} handleFilter={handleFilter} />

      <AddForm
        newName={newName}
        addName={addName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
        handleNewPerson={handleNewPerson}
      />

      <h2>Numbers</h2>
      <Persons peopleToShow={peopleToShow} />
    </div>
  );
};

export default App;
