import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { styled } from "styled-components";

const StyledForm = styled.div`
  height: 60px;
  width: 500px;
  background-color: aquamarine;
  color: darkblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-radius: 8px;

  form {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 12px;
  }

  input {
    width: 100%;
    height: 40px;
    background-color: #fafafaca;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    padding: 0 8px;
  }

  button {
  border: none;
  background-color: #cacacaca;
  cursor: pointer;
  font-size: 18px;
  padding: 6px;
  border-radius: 8px;
  }

`;


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
