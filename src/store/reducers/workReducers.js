import {
  WORK_GET_ALL_SUCCESS,
  WORK_UPDATE_STATUS_SUCCESS,
} from "../constant/work.constant";

const initialState = {
  work: [],
  loading: false,
  isCreated: false,
};

const workReducer = (state = initialState, action) => {
  switch (action.type) {
    case WORK_GET_ALL_SUCCESS: {
      return {
        ...state,
        work: action.payload,
        loading: false,
      };
    }
    case WORK_UPDATE_STATUS_SUCCESS: {
      return [...state.work];
    }

    default:
      return state;
  }
};

export default workReducer;
