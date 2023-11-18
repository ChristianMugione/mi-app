import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ItemForm = (props) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      title: input,
    };

    props.onSubmit(newTask);
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Write your next task here"
          name="title"
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default ItemForm;
