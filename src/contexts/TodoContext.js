import { React, createContext, useState, useEffect } from "react";
import axios from "axios";
export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const host = "http://localhost:3000/api";
  //state
  const [data, setData] = useState([]);
  
  const getData = () => {
    try {
      axios.get(`${host}/notes`).then((res) => {
        setData(res.data);
      });
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);

  const addTodoInArr = (title, idNote) => {
    axios
      .post(`${host}/add-work`, {
        idUser: "610172cd6320ac5e2eb7fb53",
        idNote: idNote,
        titleWork: title,
      })
      .then((res) => {
        getData();
      });
  };
  const updateStatus = (idWork) => {
    axios.put(`${host}/update-status-work/${idWork}`).then((res) => {
      getData();
    });
  };
  const updatePin = (idNote) => {
    axios
      .post(`${host}/update-pin`, {
        idUser: "610172cd6320ac5e2eb7fb53",
        idNote: idNote,
      })
      .then((res) => {
        getData();
      });
  };
  const updateBackgroundColor = (idNote, color) => {
    axios
      .put(`${host}/update-background-color/${idNote}`, {
        color: color,
      })
      .then((res) => {
        getData();
      });
  };

  const createNewNote = (title, workList, colorNote) => {
    axios
      .post(`${host}/create-note`, {
        idUser: "610172cd6320ac5e2eb7fb53",
        title: title,
        workList: workList,
        colorNote: colorNote,
      })
      .then((res) => {
        getData();
      });
  };

  const deleteNote = (idNote) => {
    axios.delete(`${host}/delete-note/${idNote}`).then((res) => {
      getData();
    });
  };
  const findNoteById = (idNote) => {
    axios.post(`${host}/note`, { id: idNote }).then((res) => {
      return res.data;
    });
  };
  const todoContextData = {
    data,
    addTodoInArr,
    updateStatus,
    updatePin,
    updateBackgroundColor,
    createNewNote,
    deleteNote,
    findNoteById,
  };

  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  );
};
export default TodoContextProvider;
