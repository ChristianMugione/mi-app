import React from "react";
import { BsTrash3 } from "react-icons/bs";
import "../hojas-de-estilos/Item.css";

export const Item = ({ id, title, delTask }) => {
  return (
    <div className="item">
      <p>{title}</p>
      {/* <p>{id}</p> */}
      <button>
        <BsTrash3 onClick={() => delTask(id)} />
      </button>
    </div>
  );
};
