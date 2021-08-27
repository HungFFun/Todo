import {
  TODOS_CREATE_SUCCESS,
  TODOS_GET_ALL_PENDING,
  TODOS_GET_ALL_SUCCESS,
  UPDATE_PIN_SUCCESS,
  UPDATE_BACKGROUND_SUCCESS,
  CREATE_NOTE_SUCCESS,
  TODOS_CREATE_PENDING,
} from "../constant/todos.constant";

const initialState = {
  todos: [],
  loading: false,
  isCreated: false,
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOS_GET_ALL_PENDING: {
      return { ...state, loading: true };
    }
    case TODOS_GET_ALL_SUCCESS: {
      return {
        ...state,
        todos: action.payload,
        loading: false,
      };
    }
    case TODOS_CREATE_PENDING: {
      return [...state.todos];
    }
    case TODOS_CREATE_SUCCESS: {
      return {
        ...state,
        isCreated: false,
      };
    }

    case UPDATE_PIN_SUCCESS: {
      const { msg } = action.payload;
      return {
        ...state,
        msg,
        isCreated: true,
      };
    }
    case UPDATE_BACKGROUND_SUCCESS: {
      const { msg } = action.payload;
      return {
        ...state,
        msg,
      };
    }
    case CREATE_NOTE_SUCCESS: {
      const { msg } = action.payload;
      return {
        ...state,
        msg,
      };
    }
    default:
      return state;
  }
};

export default todosReducer;
