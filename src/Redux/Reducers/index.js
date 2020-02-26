import * as actionTypes from "../Actions/types";
import { combineReducers } from "redux";

const initialUserState = {
  currentUser: null,
  isLoading: true
};

const user_reducer = (state = initialUserState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        currentUser: action.payload.currentUser,
        isLoading: false
      };
    case actionTypes.CLEAR_USER:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

const initialChannelState = {
  currentChannel: null,
};

const channel_reducer = (state = initialChannelState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case actionTypes.SET_CHANNEL:
      return {
        ...state,
        currentChannel: action.payload.currentChannel,
      };
    default:
      return state;
  }
};

const rootReducers = combineReducers({
  user: user_reducer,
  channel: channel_reducer,
});

export default rootReducers;
