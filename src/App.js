import React, { useState, useEffect } from "react";

import Persons from "./components/Persons";
import Filter from "./components/Filter";
import AddForm from "./components/AddForm";
import personActions from "./services/persons";

const App = (props) => {
  //persons in the phonebook
  const [persons, setPersons] = useState([]);
  //for storing user submitted input
  const [newName, setNewName] = useState("");

  const [newNumber, setNewNumber] = useState("");

  const [newFilter, setNewFilter] = useState("");

  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    personActions.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  const peopleToShow = showAll
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(newFilter.toLowerCase())
      );

  // What is done as you type into input box
  const handleNewPerson = (event) => {
    setNewName(event.target.value);
    console.log(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
    console.log(event.target.value);
  };

  const handleFilter = (event) => {
    setNewFilter(event.target.value);
    setShowAll(false);
  };

  //What is done onsubmit
  const addName = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber,
    };
    personActions.create(personObject).then((response) => {
      setPersons(persons.concat(response.data));
    });

    persons.filter((a) => a.name === newName).length !== 0
      ? window.alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(personObject));

    setNewName("");
    setNewNumber("");
  };

  // Delete function takes in id

  const deleteThis = (person) => {
    console.log(person);

    // let personName = persons.find((person) => person.id);
    if (window.confirm(`Do you really want to delete ${person.name} `)) {
      // Filtered array of contacts removing deletable post
      const personid = persons.filter((contact) => contact.id !== person.id);
      console.log(personid, "personid");
      console.log(person.id);
      personActions.remove(person.id).then((returned) => {
        setPersons(personid);
      });
    }
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
      <div>
        <ul>
          {peopleToShow.map((person, i) => (
            <Persons
              person={person}
              key={i}
              deleteThis={() => deleteThis(person)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
