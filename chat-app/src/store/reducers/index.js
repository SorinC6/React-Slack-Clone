import { combineReducers } from "redux";
import { user_reducer } from "./user_reducer";
import { channel_reducer } from "./channel_reducer";

const rootReducer = combineReducers({
  user: user_reducer,
  channel: channel_reducer
});

export default rootReducer;
