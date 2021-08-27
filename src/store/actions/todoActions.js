import axios from "axios";
import { url } from "../../api";
import {
  TODOS_CREATE_SUCCESS,
  TODOS_GET_ALL_PENDING,
  TODOS_GET_ALL_SUCCESS,
  UPDATE_PIN_SUCCESS,
  TODOS_CREATE_PENDING,
} from "../constant/todos.constant";
import { todoServices } from "../services";

export const getTodos = () => async (dispatch) => {
  dispatch({
    type: TODOS_GET_ALL_PENDING,
  });
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

export const addTodo = (data) => async (dispatch) => {
  dispatch({
    type: TODOS_CREATE_PENDING,
  });
  todoServices
    .createTodos(data)
    .then((res) => {
      const { status } = res;
      // eslint-disable-next-line eqeqeq
      if (status == 200) {
        dispatch({
          type: TODOS_CREATE_SUCCESS,
        });
      }
    })
    .catch((err) => console.log(err?.response));
};

export const updatePin = (idNote) => async (dispatch) => {
  todoServices
    .updatePin(idNote)
    .then((res) => {
      const { status } = res;
      if (status === 200) {
        dispatch({
          type: UPDATE_PIN_SUCCESS,
        });
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
