import React from "react";
import { BsTrash3 } from "react-icons/bs";
import "../hojas-de-estilos/Item.css";

export const Item = ({ title }) => {
  return (
    <div className="item">
      <p>{title}</p>
      <button>
        <BsTrash3 />
      </button>
    </div>
  );
};
