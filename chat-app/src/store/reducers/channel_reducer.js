import * as types from "../actions/types";

const initialState = {
  currentChannel: null
};

export const channel_reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_CHANNEL:
      return {
        ...state,
        currentChannel: action.payload.currentChannel
      };
    default:
      return state;
  }
};
