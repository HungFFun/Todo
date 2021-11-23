import { combineReducers } from "redux";
import noteReducer from "./noteReducers";
import workReducer from "./workReducers";
import loginReducer from "./loginReducers";

const rootReducer = combineReducers({
  notes: noteReducer,
  work: workReducer,
  login: loginReducer,
});
export default rootReducer;
