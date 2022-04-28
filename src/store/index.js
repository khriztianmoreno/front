import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {
  applicationList: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// types
const SET_DATA = "SET_DATA";
const GET_DATA = "GET_DATA";

// create actions
export const getApplications = () => {
  return { type: GET_DATA };
};

export const setApplications = (data) => {
  return { type: SET_DATA, payload: data };
};

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
