import { combineReducers } from "redux";
import todoReducer from "./todoReducers";
import workReducer from "./work.reducers";

const rootReducer = combineReducers({
  todos: todoReducer,
  work: workReducer,
});
export default rootReducer;
