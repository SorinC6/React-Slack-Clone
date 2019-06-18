import * as types from "../actions/types";

const initialState = {
  currentChannel: null,
  isPrivateChannel: false
};

export const channel_reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_CHANNEL:
      return {
        ...state,
        currentChannel: action.payload.currentChannel
      };
    case types.SET_PRIVATE_CHANNEL:
      return {
        ...state,
        isPrivateChannel: action.payload.isPrivateChannel
      };
    default:
      return state;
  }
};
