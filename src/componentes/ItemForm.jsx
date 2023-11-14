import React, { useState } from "react";

const ItemForm = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
    //
  };

  const handleForm = (e) => {
    //
  };

  return (
    <div>
      <form>
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
