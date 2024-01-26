import { userAuthReducer } from "./slices/authSlice";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: userAuthReducer,
});

export default rootReducer;
