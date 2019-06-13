import * as types from "./types";

export const setUser = user => {
  return {
    type: types.SET_USER,
    payload: {
      currentUser: user
    }
  };
};
