import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ItemForm = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
    //
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
      aaa
    </div>
  );
};

export default ItemForm;
