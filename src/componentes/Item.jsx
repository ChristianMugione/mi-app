import React from "react";
import { BsTrash3, BsCircle, BsCheck2Circle } from "react-icons/bs";
import { StyledItem } from "./ItemSyles";


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
