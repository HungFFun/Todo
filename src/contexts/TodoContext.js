import { React, createContext, useState, useEffect } from "react";
import axios from "axios";
export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  //state
  const [data, setData] = useState([]);
  const getData = () => {
    try {
      axios.get(`http://localhost:3000/api/notes`).then((res) => {
        setData(res.data);
      });
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);

  const addTodoInArr = (title, idNote) => {
    axios
      .post(`http://localhost:3000/api/add-work`, {
        idUser: "610172cd6320ac5e2eb7fb53",
        idNote: idNote,
        titleWork: title,
      })
      .then((res) => {
        getData();
      });
  };
  const updateStatus = (idWork) => {
    axios
      .post(`http://localhost:3000/api/update-status`, {
        idWork: idWork,
      })
      .then((res) => {
        getData();
      });
  };
  const updatePin = (idNote) => {
    axios
      .post(`http://localhost:3000/api/update-pin`, {
        idUser: "610172cd6320ac5e2eb7fb53",
        idNote: idNote,
      })
      .then((res) => {
        getData();
      });
  };
  const updateBackgroundColor = (idNote, color) => {
    axios
      .post(`http://localhost:3000/api/update-background-color`, {
        idNote: idNote,
        color: color,
      })
      .then((res) => {
        console.log(res.data);
        getData();
      });
  };

  const todoContextData = {
    data,
    addTodoInArr,
    updateStatus,
    updatePin,
    updateBackgroundColor,
  };

  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  );
};
export default TodoContextProvider;
