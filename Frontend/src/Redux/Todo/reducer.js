import {
  GET_TODO_ERROR,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
} from "./actiontype";

const IntialState = {
  todos: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = IntialState, { type, payload }) => {
  switch (type) {
    case GET_TODO_SUCCESS:
      return { ...state, todos: payload, isLoading: false };
    case GET_TODO_REQUEST:
      return { ...state, isLoading: true };
    case GET_TODO_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
