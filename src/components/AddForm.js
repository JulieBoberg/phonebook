import React from "react";


const AddForm = ({
  addName,
  newName,
  newNumber,
  handleNewNumber,
  handleNewPerson
}) => {
  return (
    <div>
      <form onSubmit={addName}>
       name: <input  value={newName} onChange={handleNewPerson} />
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>

        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </div>
  );
};
export default AddForm;
