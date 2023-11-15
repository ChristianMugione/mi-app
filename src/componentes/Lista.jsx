import React, { useState } from "react";
import { Item } from "./Item";
import "../hojas-de-estilos/lista.css";

const items = [
  {
    title: "Cada1",
  },
  {
    title: "Cada2",
  },
  {
    title: "Cada3",
  },
  {
    title: "Cada4",
  },
  {
    title: "Cada5",
  },
  {
    title: "Cada",
  },
];

export const Lista = () => {
  const [item, setItem] = useState([]);

  const addTask = (newTask) => {
    setItem([newTask, ...items]);
    console.log(items);
  };

  return (
    <div className="lista">
      {items.map((item) => {
        console.log(item.title);
        return <Item title={item.title} />;
      })}
    </div>
  );
};
