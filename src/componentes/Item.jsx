import React from "react";
import { BsTrash3, BsCircle, BsCheck2Circle } from "react-icons/bs";
import styled from "styled-components";

const StyledItem = styled.div`
  height: 60px;
  width: 500px;
  /* background-color: aquamarine; */
  background-color: ${(props) => props.completed ? 'gray' : 'midnightblue' };  //aquamarine;
  text-decoration: ${(props) => props.completed ? 'line-through' : 'none' };
  color: turquoise;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  /* border: 1px solid turquoise; */
  border-radius: 8px;
  box-shadow: 0 0 8px -3px turquoise;
  gap: 10px;
  font-size: 22px;

  button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;
  }

  .item-left {
    display: flex;
    justify-content: center;
    gap: 4px;
    text-align: left;
  }
`;

export const Item = ({ id, title, completed, delTask, completeTask }) => {

  const CompletedCheck = () => {

    return (
      <button 
      onClick={() => completeTask(id)}>{completed?<BsCheck2Circle />:<BsCircle />}</button>
    )
  }
  
  return (
    <StyledItem completed={completed}>

      <div className="item-left">
        <p>{title}</p>
        <CompletedCheck />
      </div>
      
      <button>
        <BsTrash3 onClick={() => delTask(id)}/>
      </button>

    </StyledItem>
  );
};
