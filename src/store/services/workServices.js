import axios from "../../utils/axios";
class workServices {
  getWorkByIdNote = (idNote) => {
    return axios.request({
      method: "GET",
      url: `/work-by-note/${idNote}`,
    });
  };
  createWord = (data) => {
    return axios.request({
      method: "POST",
      url: `/add-work`,
      data,
    });
  };
  updateStatusWork = (idWork) => {
    return axios.request({
      method: "PUT",
      url: `/update-status-work/${idWork}`,
    });
  };

  removeWork = (idWork) => {
    return axios.request({
      method: "DELETE",
      url: `/delete-work/${idWork}`,
    });
  };
}
export default workServices;
