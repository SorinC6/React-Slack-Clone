import * as types from "../actions/types";
import { combineReducers } from "redux";

const initialState = {
  currentUser: null,
  isLoading: true
};

const user_reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        currentUser: action.payload.currentUser,
        isLoading: false
      };
    case types.CLEAR_USER:
      return {
        ...state,
        currentUser: null,
        isLoading: false
      };
    default:
      return state;
  }
};



const rootReducer = combineReducers({
  user: user_reducer
});

export default rootReducer;
