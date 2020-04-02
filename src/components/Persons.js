import React from "react";

const Persons = ({ peopleToShow }) => {
  return (
    <div>
      <ul>
        {peopleToShow.map((person, i) => (
          <li key={i}>
            {person.name}: {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Persons;
