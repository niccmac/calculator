import { useContext, useState, createContext } from "react";

export const toDoContext = createContext();

export default function ToDoProvider(props) {
  const [allToDo, setAllToDo] = useState([]);
  const addToDo = (todo) => {
    if (!todo.text || /^\s$/.test(todo.text)) {
      return;
    }
    const newToDos = [...allToDo, todo];
    setAllToDo(newToDos);
  };
  const deleteToDo = (id) => {
    let updatedToDos = allToDo.filter((task) => task.id !== id);

    setAllToDo([...updatedToDos]);
  };
  const completeToDo = (id) => {
    let updatedToDos = allToDo.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    setAllToDo([...updatedToDos]);
  };
  const editToDo = (id, newText) => {
    console.log(newText.text, id);
    if (!newText.text || /^\s$/.test(newText.text)) {
      return;
    }
    setAllToDo((prev) => prev.map((item) => (item.id === id ? newText : null)));
  };
  const exportValues = {
    addToDo,
    allToDo,
    setAllToDo,
    deleteToDo,
    completeToDo,
    editToDo,
  };

  return (
    <toDoContext.Provider value={exportValues}>
      {props.children}
    </toDoContext.Provider>
  );
}
export const useGame = () => useContext(toDoContext);
