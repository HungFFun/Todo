import axios from "../../utils/axios";
import { url } from "../../api";
class noteServices {
  getListNote = () => {
    return axios.request({
      method: "GET",
      url: `/notes`,
    });
  };
  updatePin = (idNote) => {
    return axios.request({
      method: "PUT",
      url: `/update-pin/${idNote}`,
      data: {
        idUser: "610172cd6320ac5e2eb7fb53",
        idNote: idNote,
      },
    });
  };
  updateBackgroundColor = (idNote, color) => {
    return axios.request({
      method: "PUT",
      url: `/update-background-color/${idNote}`,
      data: { color: color },
    });
  };
  createNewNote = (title, workList, colorNote, pin) => {
    return axios.request({
      method: "POST",
      url: `/create-note`,
      data: {
        idUser: "610172cd6320ac5e2eb7fb53",
        title: title,
        workList: workList,
        colorNote: colorNote,
        pin: pin,
      },
    });
  };
  deleteNote = (idNote) => {
    return axios.request({
      method: "DELETE",
      url: `/delete-note/${idNote}`,
    });
  };
  trashNote = (idNote) => {
    return axios.request({
      method: "PUT",
      url: `/trash/${idNote}`,
    });
  };
  storageNote = (idNote) => {
    return axios.request({
      method: "PUT",
      url: `/storage/${idNote}`,
    });
  };
}
export default noteServices;
