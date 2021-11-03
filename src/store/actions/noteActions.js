import {
  NOTE_GET_ALL_SUCCESS,
  UPDATE_BACKGROUND_COLOR,
} from "../constant/note.constant";
import { noteServices } from "../services";

export const getListNote = () => async (dispatch) => {
  noteServices
    .getListNote()
    .then((res) => {
      const { status, data } = res;
      // eslint-disable-next-line eqeqeq
      if (status == 200) {
        dispatch({
          type: NOTE_GET_ALL_SUCCESS,
          payload: data,
        });
      }
    })
    .catch((err) => console.log(err.response.msg));
};

export const updatePin = (idNote) => {
  return noteServices
    .updatePin(idNote)
    .then((res) => {
      const { status, data } = res;
      if (status === 200) {
        return data;
      }
    })
    .catch((err) => console.log(err.response.msg));
};
export const updateBackgroundColor = (idNote, color) => async (dispatch) => {
  return noteServices
    .updateBackgroundColor(idNote, color)
    .then((res) => {
      dispatch({
        type: UPDATE_BACKGROUND_COLOR,
        payload: { idNote, color },
      });
    })
    .catch((error) => {
      console.log(error.response);
    });
};

export const createNewNote = (title, workList, colorNote, pin) => {
  return noteServices
    .createNewNote(title, workList, colorNote, pin)
    .then((res) => {
      const { status, data } = res;
      if (status === 200) {
        return data;
      }
    })
    .catch((error) => {
      console.log(error.response);
    });
};

export const deleteNote = (idNote) => {
  return noteServices
    .deleteNote(idNote)
    .then((res) => {
      const { status, data } = res;
      if (status === 200) {
        return data;
      }
    })
    .catch((error) => {
      console.log(error.response);
    });
};
