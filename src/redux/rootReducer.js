import { combineReducers } from "redux";
import { searchCharacters } from "./reducers";

const rootReducer = combineReducers({
  searchCharacters
});

export default rootReducer;
