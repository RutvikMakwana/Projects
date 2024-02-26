import { applyMiddleware, createStore } from "redux";
import reducers from "./action-creators/reducers";
import { thunk } from "redux-thunk";

export const store = createStore(reducers, {}, applyMiddleware(thunk));
