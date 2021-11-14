import { combineReducers } from "redux";
import issueReducer from "./issues/issueReducer";

const rootReducer = combineReducers({
  issues: issueReducer,
});

export default rootReducer;
