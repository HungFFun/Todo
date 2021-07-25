import { React, createContext, useState } from "react";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  //state
  const [data, setData] = useState([
    {
      title: "hocj",
      isCompleted: true,
    },
    { title: "ngur", isCompleted: false },
    { title: "nghir", isCompleted: true },
  ]);
  const addTodoInArr = (title) => {
    const newTodo = [...data, { title: title }];
    setData(newTodo);
  };

  const todoContextData = {
    data,
    addTodoInArr,
  };
  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  );
};
export default TodoContextProvider;
