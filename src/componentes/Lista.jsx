import React, { useState, useEffect } from "react";
import { Item } from "./Item";
import "../hojas-de-estilos/lista.css";
import ItemForm from "./ItemForm";

export const Lista = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const storedTaskList = localStorage.getItem("tasklist");

    if (storedTaskList) {
      const parsedTaskList = JSON.parse(storedTaskList);
      setItem(parsedTaskList);
    }
  }, []);

  const addTask = (newTask) => {
    setItem((prevItem) => {
      const updatedItem = [newTask, ...item];
      localStorage.setItem("tasklist", JSON.stringify(updatedItem));
      return updatedItem;
    });
  };
  
  const delTask = (id) => {
    setItem((prevItem) => {
      const updatedItem = item.filter((task) => task.id !== id);
      localStorage.setItem("tasklist", JSON.stringify(updatedItem));
      return updatedItem;
    });
    
  };
  
  const completeTask = (id) => {
    setItem((prevItem) => {
      const updatedItem = item.map((task) => {
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
      localStorage.setItem("tasklist", JSON.stringify(updatedItem));
      return updatedItem;
    })
    // setItem(newTaskList)
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
