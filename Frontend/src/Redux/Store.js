import { combineReducers, createStore } from "redux";
import { reducer as todoReducer } from "./Todo/reducer";

const MainReducer = combineReducers({ todoReducer });

export const store = createStore(MainReducer);
