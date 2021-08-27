import {
  WORK_GET_ALL_SUCCESS,
  WORK_UPDATE_STATUS_SUCCESS,
} from "../constant/work.constant";
import { workServices } from "../services";

export const getWork = (data) => async (dispatch) => {
  dispatch({
    type: WORK_GET_ALL_SUCCESS,
  });
  workServices
    .getWorkByIdNote(data)
    .then((res) => {
      const { status, data } = res;
      // eslint-disable-next-line eqeqeq
      if (status == 200) {
        dispatch({
          type: WORK_GET_ALL_SUCCESS,
          payload: data,
        });
      }
    })
    .catch((err) => console.log(err.response.msg));
};

export const updateStatusWork = (idWork) => async (dispatch) => {
  dispatch({
    type: WORK_UPDATE_STATUS_SUCCESS,
  });
  workServices
    .updateStatusWork(idWork)
    .then((res) => {
      const { status, data } = res;
      // eslint-disable-next-line eqeqeq
      if (status == 200) {
        dispatch({
          type: WORK_UPDATE_STATUS_SUCCESS,
          payload: data,
        });
      }
    })
    .catch((err) => console.log(err.response));
};
