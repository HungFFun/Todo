import axios from "axios";
import { url } from "../../api";

class noteServices {
  getListNote = () => {
    return axios.request({
      method: "GET",
      url: `${url}/notes`,
    });
  };
  updatePin = (idNote) => {
    return axios.request({
      method: "PUT",
      url: `${url}/update-pin/${idNote}`,
      data: {
        idUser: "610172cd6320ac5e2eb7fb53",
        idNote: idNote,
      },
    });
  };
  updateBackgroundColor = (idNote, color) => {
    return axios.request({
      method: "PUT",
      url: `${url}/update-background-color/${idNote}`,
      data: { color: color },
    });
  };
  createNewNote = (title, workList, colorNote) => {
    return axios.request({
      method: "POST",
      url: `${url}/create-note`,
      data: {
        idUser: "610172cd6320ac5e2eb7fb53",
        title: title,
        workList: workList,
        colorNote: colorNote,
      },
    });
  };
  deleteNote = (idNote) => {
    return axios.request({
      method: "DELETE",
      url: `${url}/delete-note/${idNote}`,
    });
  };
}
export default noteServices;
