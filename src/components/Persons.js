import React, { Fragment } from "react";

const Persons = ({ person, deleteThis }) => {
  return (
    <div>
      <Fragment>
        <li>
          {person.name}: {person.number}
          <button onClick={deleteThis}>Delete</button>
        </li>
      </Fragment>
    </div>
  );
};
export default Persons;

//  { "id": 2, "name": "Arto Hellas", "number": "040-123456" },
// { "id": 3, "name": "Ada Lovelace", "number": "39-44-5323523" },
// { "id": 4, "name": "Dan Abramov", "number": "12-43-234345" },
// { "id": 5, "name": "Mary Poppendieck", "number": "39-23-6423122" }

