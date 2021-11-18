import { combineReducers } from "redux";
import noteReducer from "./noteReducers";
import workReducer from "./workReducers";

const rootReducer = combineReducers({
  notes: noteReducer,
  work: workReducer,
});
export default rootReducer;
