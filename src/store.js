import {
  applyMiddleware,
  legacy_createStore as createStore,
  compose,
} from "redux";
import rootReducer from "./Redux/rootReducer";
import { thunk } from "redux-thunk";

const componseEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  componseEnhancer(applyMiddleware(thunk))
);
