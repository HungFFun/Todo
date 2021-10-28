import axios from "axios";
import { url } from "../../api";

class workServices {
  getWorkByIdNote = (idNote) => {
    return axios.request({
      method: "GET",
      url: `${url}/work-by-note/${idNote}`,
    });
  };
  createWord = (data) => {
    return axios.request({
      method: "POST",
      url: `${url}/add-work`,
      data,
    });
  };
  updateStatusWork = (idWork) => {
    return axios.request({
      method: "PUT",
      url: `${url}/update-status-work/${idWork}`,
    });
  };

  removeWork = (idWork) => {
    return axios.request({
      method: "DELETE",
      url: `${url}/delete-work/${idWork}`,
    });
  };
}
export default workServices;
