import React, { useState } from "react";
import { BsTrash3, BsCircle, BsCheck2Circle } from "react-icons/bs";
import "../hojas-de-estilos/Item.css";

export const Item = ({ id, title, completed, delTask, completeTask }) => {

  const CompletedCheck = () => {
    return (
      <button onClick={() => completeTask(id)}>{completed?<BsCheck2Circle />:<BsCircle />}</button>
    )
  }

  
  return (
    <div className="item">
      <div className="item-left">
      <p>{title}</p>
      <CompletedCheck />
      {/* <p>{completed?<BsCheck2Circle />:<BsCircle />}</p> */}
      </div>
      
      <button>
        <BsTrash3 onClick={() => delTask(id)}/>
      </button>
    </div>
  );
};
