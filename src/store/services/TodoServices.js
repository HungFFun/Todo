import axios from "axios";
import { url } from "../../api";

class TodosServices {
  getAllTodos = () => {
    return axios.request({
      method: "GET",
      url: `${url}/notes`,
    });
  };
  createTodos = (data) => {
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

  updatePin = (idNote) => {
    return axios.request({
      method: "PUT",
      url: `${url}/update-pin/${idNote}`,
    });
  };
}
export default TodosServices;
