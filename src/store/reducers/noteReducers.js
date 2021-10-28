import {
  NOTE_CREATE_SUCCESS,
  NOTE_GET_ALL_PENDING,
  NOTE_GET_ALL_SUCCESS,
  NOTE_CREATE_PENDING,
  RELOAD,
  UPDATE_BACKGROUND_COLOR,
} from "../constant/note.constant";

const initialState = {
  notes: [],
  loading: false,
  isCreated: false,
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTE_GET_ALL_PENDING: {
      return { ...state, loading: true };
    }
    case NOTE_GET_ALL_SUCCESS: {
      return {
        ...state,
        notes: action.payload,
        loading: false,
      };
    }
    case NOTE_CREATE_PENDING: {
      return [...state.notes];
    }
    case NOTE_CREATE_SUCCESS: {
      return {
        ...state,
        isCreated: false,
      };
    }
    case RELOAD: {
      const newList = [...state.notes];
      newList.filter(function (item) {
        if (item._id === action.payload) {
          item.pin = !item.pin;
        }
      });
      return {
        ...state,
        notes: newList,
        loading: false,
      };
    }
    case UPDATE_BACKGROUND_COLOR: {
      const newList = [...state.notes];
      newList.filter(function (item) {
        if (item._id === action.payload.idNote) {
          item.color = action.payload.color;
        }
      });
      return {
        ...state,
        notes: newList,
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default noteReducer;
