import {
  applyMiddleware,
  legacy_createStore as createStore,
  compose,
} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./Redux/rootReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const componseEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// export const store = createStore(persistedReducer, componseEnhancer);

// export const persistor = persistStore(store);

export const store = createStore(persistedReducer, componseEnhancer);
export const persistor = persistStore(store);

console.log(persistor);
console.log("Is Rehydrated :", persistor.getState());
