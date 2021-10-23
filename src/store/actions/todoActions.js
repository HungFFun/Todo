import axios from "axios";
import { url } from "../../api";
import { TODOS_GET_ALL_SUCCESS } from "../constant/todos.constant";
import { todoServices } from "../services";

export const getTodos = () => async (dispatch) => {
  todoServices
    .getAllTodos()
    .then((res) => {
      const { status, data } = res;
      // eslint-disable-next-line eqeqeq
      if (status == 200) {
        dispatch({
          type: TODOS_GET_ALL_SUCCESS,
          payload: data,
        });
      }
    })
    .catch((err) => console.log(err.response.msg));
};

export const addTodo = (data) => {
  return todoServices
    .createTodos(data)
    .then((res) => {
      const { status, data } = res;
      // eslint-disable-next-line eqeqeq
      if (status == 200) {
        return data;
      }
    })
    .catch((err) => console.log(err?.response));
};
export const updatePin = (idNote) => {
  return todoServices
    .updatePin(idNote)
    .then((res) => {
      const { status, data } = res;
      if (status === 200) {
        return data;
      }
    })
    .catch((err) => console.log(err.response.msg));
};
export const updateBackgroundColor = (idNote, color) => {
  return (dispatch) => {
    axios
      .put(`${url}/update-background-color/${idNote}`, {
        color: color,
      })
      .then((todo) => {
        dispatch({
          type: "UPDATE_BACKGROUND_COLOR",
          todo,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const createNewNote = (title, workList, colorNote) => {
  return (dispatch) => {
    axios
      .post(`${url}/create-note`, {
        idUser: "610172cd6320ac5e2eb7fb53",
        title: title,
        workList: workList,
        colorNote: colorNote,
      })
      .then((todo) => {
        dispatch({
          type: "CREATE_NOTE",
          todo,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};
