import {
  TODOS_CREATE_SUCCESS,
  TODOS_GET_ALL_PENDING,
  TODOS_GET_ALL_SUCCESS,
  TODOS_CREATE_PENDING,
  RELOAD,
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
    case RELOAD: {
      const newList = [...state.todos];
      newList.filter(function (item) {
        if (item._id === action.payload) {
          item.pin = !item.pin;
        }
      });
      return {
        ...state,
        todos: newList,
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default todosReducer;
