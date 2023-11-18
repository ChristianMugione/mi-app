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

  const completeTask = (id) => {
    const newTaskList = item.map((task) => {
      task.id === id? console.log(task.completed) : console.log("ss");
      
      if (task.id === id) {
        const modifiedTask = {
          ...task,
          completed: !task.completed
        }
        return modifiedTask;
      } else {
        return task;
      }
    })
    setItem(newTaskList)
  }

  return (
    <div className="lista">
      {item.map((item) => {
        return <Item key={item.id} title={item.title} id={item.id} completed={item.completed} delTask={delTask} completeTask={completeTask} />;
      })}
      <ItemForm onSubmit={addTask} />
    </div>
  );
};
