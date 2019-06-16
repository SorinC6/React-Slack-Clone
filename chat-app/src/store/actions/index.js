import * as types from "./types";

//user action
export const setUser = user => {
  return {
    type: types.SET_USER,
    payload: {
      currentUser: user
    }
  };
};

export const clearUser = () => {
  return {
    type: types.CLEAR_USER
  };
};

//channel action
export const setCurrentChannel = channel => {
  return {
    type: types.SET_CURRENT_CHANNEL,
    payload: {
      currentChannel: channel
    }
  };
};
