import React, { useState } from "react";
import { Item } from "./Item";
import "../hojas-de-estilos/lista.css";
import ItemForm from "./ItemForm";

export const Lista = () => {
  const [item, setItem] = useState([]);

  const addTask = (newTask) => {
    setItem([newTask, ...item]);
    // console.log(item);
  };

  const delTask = (id) => {
    const newTaskList = item.filter((task) => task.id !== id);
    setItem(newTaskList);
  };

  return (
    <div className="lista">
      {item.map((item) => {
        return <Item title={item.title} id={item.id} delTask={delTask} />;
      })}
      <ItemForm onSubmit={addTask} />
    </div>
  );
};
