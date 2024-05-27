import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { StyledForm } from "./ItemSyles";

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
      completed: false,
    };
    props.onSubmit(newTask);
    
    setInput(""); 

  };

  return (
    <StyledForm>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Write your next task here"
          name="title"
          value={input}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </StyledForm>
  );
};

export default ItemForm;
